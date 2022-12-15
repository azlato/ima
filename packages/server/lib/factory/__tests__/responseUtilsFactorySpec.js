'use strict';

const responseUtilsFactory = require('../responseUtilsFactory.js');
const manifestMock = require('../__mocks__/manifest.json');

jest.mock('fs', () => {
  const { toMockedInstance } = jest.requireActual('to-mock');
  const originalModule = jest.requireActual('fs');

  return {
    ...toMockedInstance(originalModule, {
      existsSync() {
        return true;
      },
      readFileSync(path) {
        if (path.endsWith('manifest.json')) {
          return JSON.stringify(manifestMock);
        }

        return 'runner#{$Source}';
      },
    }),
  };
});

describe('responseUtilsFactory', () => {
  const {
    processContent,
    _renderStyles,
    _renderStylesPreload,
    _prepareCookieOptionsForExpress,
    _prepareSource,
  } = responseUtilsFactory();

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('_renderStyles', () => {
    it('should return empty string for invalid input', () => {
      expect(_renderStyles()).toBe('');
      expect(_renderStyles([])).toBe('');
      expect(_renderStyles({})).toBe('');
      expect(_renderStyles(null)).toBe('');
      expect(_renderStyles('/static/app.css')).toBe('');
    });

    it('should return link stylesheet tags for string items', () => {
      expect(_renderStyles(['/static/app.css'])).toBe(
        '<link rel="stylesheet" href="/static/app.css" />'
      );

      expect(
        _renderStyles([
          '/static/app1.css',
          '/static/app2.css',
          '/static/app3.css',
        ])
      ).toBe(
        '<link rel="stylesheet" href="/static/app1.css" />' +
          '<link rel="stylesheet" href="/static/app2.css" />' +
          '<link rel="stylesheet" href="/static/app3.css" />'
      );
    });

    it('should return link tag with custom attributes', () => {
      expect(
        _renderStyles([
          [
            '/static/app.css',
            { type: 'text/css', rel: 'preload', as: 'style' },
          ],
        ])
      ).toBe(
        '<link href="/static/app.css" rel="preload" type="text/css" as="style" />'
      );
    });

    it('should insert custom mini script for fallback sources', () => {
      expect(
        _renderStyles([
          [
            '/static/app.css',
            { rel: 'stylesheet', fallback: '/static/fallback.css' },
          ],
        ])
      ).toBe(
        `<link href="/static/app.css" rel="stylesheet" onerror="this.onerror=null;this.href='/static/fallback.css';" />`
      );
    });
  });

  describe('_renderStylesPreload', () => {
    it('should return empty string for invalid input', () => {
      expect(_renderStylesPreload()).toBe('');
      expect(_renderStylesPreload([])).toBe('');
      expect(_renderStylesPreload({})).toBe('');
      expect(_renderStylesPreload(null)).toBe('');
      expect(_renderStylesPreload('/static/app.css')).toBe('');
    });

    it('should generate preload rel link when enabled', () => {
      expect(
        _renderStylesPreload([
          [
            '/static/app.css',
            {
              rel: 'stylesheet',
              fallback: '/static/fallback.css',
              preload: true,
            },
          ],
        ])
      ).toBe(
        `<link as="style" href="/static/app.css" rel="preload" type="text/css" />`
      );
    });

    it('should not generate preload rel link when disabled', () => {
      expect(
        _renderStylesPreload([
          [
            '/static/app.css',
            {
              rel: 'stylesheet',
              fallback: '/static/fallback.css',
              preload: false,
            },
          ],
        ])
      ).toBe('');
    });
  });

  describe('_prepareSource', () => {
    it('should prepare default sources structure from provided manifest file', () => {
      expect(_prepareSource(manifestMock, 'en')).toMatchSnapshot();
    });

    it('should add fallbacks when CDN_STATIC_ROOT_URL is defined', () => {
      process.env.CDN_STATIC_ROOT_URL = 'cdn://';

      expect(_prepareSource(manifestMock, 'en')).toMatchSnapshot();
      process.env.CDN_STATIC_ROOT_URL = '';
    });

    it('should skip compilations without assets', () => {
      const sources = _prepareSource(
        {
          ...manifestMock,
          assetsByCompiler: {
            ...manifestMock.assetsByCompiler,
            client: {},
          },
        },
        'en'
      );

      expect(sources).toMatchSnapshot();
    });
  });

  describe('_prepareCookieOptionsForExpress', () => {
    it('should convert cookie maxAge to ms for Express', () => {
      let options = { maxAge: 1 };
      let expressOptions = _prepareCookieOptionsForExpress(options);
      expect(options.maxAge).toBe(1);
      expect(expressOptions.maxAge).toBe(1000);
    });

    it('should remove cookie maxAge: null for Express', () => {
      // Because Express converts null to 0, which is not intended.
      let options = { maxAge: null };
      let expressOptions = _prepareCookieOptionsForExpress(options);
      expect(options.maxAge).toBeNull();
      expect(expressOptions.maxAge).toBeUndefined();
    });
  });

  describe('processContent', () => {
    it('should return original content without any boot config', () => {
      expect(processContent({ response: { content: 'content' } })).toBe(
        'content'
      );
    });

    it('should interpolate revival scripts into page content', () => {
      const response = {
        content: '<html>#{$Styles}#{$RevivalSettings}#{$Runner}</html>',
      };
      const bootConfig = {
        settings: {
          $Language: 'en',
          $Debug: true,
        },
      };
      const contextMock = { response, bootConfig };

      const content = processContent(contextMock);
      expect(content).toMatchSnapshot();
    });

    it('should allow overrides through custom $Source definition', () => {
      const response = {
        content: '<html>#{$Scripts}</html>',
      };
      const bootConfig = {
        settings: {
          $Language: 'en',
          $Debug: true,
          $Source: (context, manifest, sources) => {
            return {
              styles: [],
              esScripts: [...sources.scripts, 'custom-script-src'],
            };
          },
        },
      };
      const contextMock = { response, bootConfig };

      const content = processContent(contextMock);
      expect(content).toMatchSnapshot();
    });
  });
});