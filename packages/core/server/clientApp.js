var fs = require('fs');
var stackTrace = require('stack-trace');
var asyncEach = require('async-each');
var hljs = require('highlight.js');
var sep = require('path').sep;
var errorView = require('./template/errorView.js');
var environment = require('./environment.js');
var instanceRecycler = require('./instanceRecycler.js');

var appServerScript = require('./app.server.js');

var appServer = appServerScript();

hljs.configure({
	tabReplace: '  ',
	lineNodes: true
});

instanceRecycler.init(appServer.createIMAJsApp, environment.$Server.concurency);

module.exports = (() => {
	var _displayDetails = (err, req, res) => {
		var stack = stackTrace.parse(err);
		var fileIndex = 1;

		console.error('Stack: ',err.stack);
		console.error('Params: ', err._params);

		asyncEach(stack, function getContentInfo(item, cb) {
			// exclude core node modules and node modules
			if ((item.fileName.indexOf(sep) !== -1) && !/node_modules/.test(item.fileName)) {
				fs.readFile(item.fileName, 'utf-8', function(err, content) {
					if (err) { return cb(err); }

					content = hljs.highlight('javascript', content);

					// start a few lines before the error or at the beginning of the file
					var start = Math.max(item.lineNumber - 7, 0);
					var lines = content.value.split('\n').map((line) => {
						return '<span class="line">' + line + '</span>';
					});
					// end a few lines after the error or the last line of the file
					var end = Math.min(item.lineNumber + 6, lines.length);
					var snippet = lines.slice(start, end);
					// array starts at 0 but lines numbers begin with 1, so we have to
					// subtract 1 to get the error line position in the array
					var errLine = item.lineNumber - start - 1;

					snippet[errLine] = snippet[errLine].replace('<span class="line">', '<span class="line error-line">');

					item.content = snippet.join('\n');
					item.errLine = errLine;
					item.startLine = start;
					item.id = 'file-' + fileIndex;

					fileIndex++;

					cb(null, item);
				});
			} else {
				cb();
			}
		}, (e, items) => {
			items = items.filter((item) => { return !!item; });

			// if something bad happened while processing the stacktrace
			// make sure to return something useful
			if (e) {
				console.error(e);
				return res.send(err.stack);
			}

			res.send(errorView(err,items));
		});
	};

	var _initApp = (req, res) => {
		var language = res.locals.language;
		var languagePartPath = res.locals.languagePartPath;
		var domain = res.locals.domain;
		var root = res.locals.root;
		var protocol = res.locals.protocol;

		var dictionary = require('./locale/' + language + '.js');

		var app = instanceRecycler.getInstance();

		var bootConfig = {
			services: {
				request: req,
				response: res,
				$IMA: {},
				dictionary: {
					$Language: language,
					dictionary: dictionary
				},
				router: {
					$Protocol: protocol,
					$Domain: domain,
					$Root: root,
					$LanguagePartPath: languagePartPath
				}
			},
			settings: {
				$Debug: environment.$Debug,
				$Env: environment.$Env,
				$Protocol: protocol,
				$Language: language,
				$Domain: domain,
				$Root: root,
				$LanguagePartPath: languagePartPath
			}
		};

		Object.assign(bootConfig, appServer.getInit());
		app.bootstrap
			.run(bootConfig);

		return app;
	};

	var showStaticErrorPage = (err, req, res) => {
		console.log(err);

		fs.readFile('./build/static/html/error.html', 'utf-8', (error, content) => {
			res.status(500)

			if (error) {
				res.send('500');
			}
			res.send(content);
		});
	};

	var errorHandler = (err, req, res, app) => {
		var promise = Promise.reject(err);

		if (environment.$Debug) {
			_displayDetails(err, req, res);

			return promise;
		} else {

			if (!app) {
				app = _initApp(req, res);
			}
			var router = app.oc.get('$Router');
			app.oc.get('$Cache').clear();

			var applyError = (error) => {
				var promise = Promise.reject(error);

				try {
					promise = router
							.handleError({error})
							.then(() => {
								instanceRecycler.clearInstance(app);
							})
							.catch((fatalError) => {
								instanceRecycler.clearInstance(app);
								showStaticErrorPage(fatalError, req, res);

								return Promise.reject(fatalError);
							})
				} catch(e) {
					instanceRecycler.clearInstance(app);
					showStaticErrorPage(e, req, res);
					promise = Promise.reject(e);
				}

				return promise;
			};

			if (router.isClientError(err)) {
				try {
					promise = router
							.handleNotFound({error:err})
							.then(() => {
								instanceRecycler.clearInstance(app);
							})
							.catch((error) => {
								return applyError(error);
							});
				} catch(e) {
					promise = applyError(e);
				}
			} else if (router.isRedirection(err)) {
				try {
					promise = router
							.redirect(err.getParams().url)
							.then(() => {
								instanceRecycler.clearInstance(app);
							})
							.catch((error) => {
								return applyError(error);
							})
				} catch(e) {
					promise = applyError(e);
				}
			} else {
				promise = applyError(err);
			}
		}

		return promise;
	};

	var response = (req, res) => {
		var promise = Promise.reject(new Error());
		var app = _initApp(req, res);
		var router = app.oc.get('$Router');

		try {
			promise = router
					.route(router.getPath())
					.then((response) => {
						instanceRecycler.clearInstance(app);
						console.log('RESPONSE', response);

						return response;
					})
					.catch((error) => {
						return errorHandler(error, req, res, app);
					});
		} catch(e) {
			promise = errorHandler(e, req, res, app);
		}

		return promise;
	};

	return {errorHandler, response, showStaticErrorPage};
})();