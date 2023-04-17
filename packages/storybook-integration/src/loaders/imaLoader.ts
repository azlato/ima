import type * as imaCore from '@ima/core';
import { Loader, Parameters } from '@storybook/react';
import merge from 'ts-deepmerge';

let app: ReturnType<typeof imaCore.createImaApp> | null = null;
let bootConfig: imaCore.BootConfig | null = null;
let lastImaParams: Parameters = {};

export type ImaLoaderParameters = {
  ima?: {
    initBindApp?: imaCore.InitBindFunction;
    initRoutes?: imaCore.InitRoutesFunction;
    initServicesApp?: imaCore.InitServicesFunction;
    initSettings?: imaCore.InitSettingsFunction;
    $IMA?: imaCore.GlobalImaObject;
    state?: imaCore.PageState;
  };
};

/**
 * Utility to destroy old instance before creating a new one.
 */
async function destroyInstance(
  app: ReturnType<typeof imaCore.createImaApp> | null
): Promise<void> {
  if (!app) {
    return;
  }

  app.oc.get('$Dispatcher').clear();
  app.oc.get('$Router').unlisten();
  app.oc.get('$PageRenderer').unmount();
  await app.oc.get('$PageManager').destroy();
}

/**
 * Set revival settings to window.
 */
function initRevivalSettings(parameters: ImaLoaderParameters): void {
  window.$Debug = true;
  window.$IMA = merge(window.$IMA, parameters?.ima?.$IMA ?? {});
}

/**
 * Update ima state from parameters.ima.state.
 */
function updateState(
  app: ReturnType<typeof imaCore.createImaApp>,
  parameters: ImaLoaderParameters
): void {
  if (!app) {
    return;
  }

  const patchState = parameters?.ima?.state ?? {};
  const stateManager = app.oc.get('$PageStateManager');

  if (patchState === null) {
    return stateManager.clear();
  }

  return stateManager.setState(patchState);
}

/**
 * Extend app boot config with parameter overrides.
 */
export function extendBootConfig(
  appConfigFunctions: imaCore.InitAppConfig,
  extendedConfig?: Partial<imaCore.InitAppConfig>
): imaCore.InitAppConfig {
  return {
    initBindApp: (...args) => {
      appConfigFunctions.initBindApp(...args);
      extendedConfig?.initBindApp?.(...args);
    },
    initRoutes: (...args) => {
      appConfigFunctions.initRoutes(...args);
      extendedConfig?.initRoutes?.(...args);
    },
    initServicesApp: (...args) => {
      appConfigFunctions.initServicesApp(...args);
      extendedConfig?.initServicesApp?.(...args);
    },
    initSettings: (...args) => {
      return merge(
        appConfigFunctions.initSettings(...args),
        extendedConfig?.initSettings?.(...args) ?? {}
      );
    },
  };
}

export const imaLoader: Loader = async args => {
  const parameters = args.parameters as ImaLoaderParameters;
  initRevivalSettings(parameters);

  // Create new ima app if any of the params change
  if (
    [
      'initBindApp',
      'initRoutes',
      'initServicesApp',
      'initSettings',
      '$IMA',
      // @ts-expect-error
    ].some(key => lastImaParams?.[key] !== parameters?.ima?.[key])
  ) {
    // Destroy old instance
    await destroyInstance(app);

    app = null;
    bootConfig = null;
  }

  // Return cached ima app
  if (app && bootConfig) {
    // Update page state
    updateState(app, parameters);

    return {
      app,
      bootConfig,
    };
  }

  // Get ima from app/main
  const {
    ima,
    getInitialAppConfigFunctions,
  }: {
    ima: typeof imaCore;
    getInitialAppConfigFunctions: () => imaCore.InitAppConfig;
    // @ts-expect-error this is handled in storybook context with aliases
    // eslint-disable-next-line import/no-unresolved
  } = await import('app/main');

  lastImaParams = { ...parameters?.ima } as ImaLoaderParameters;
  app = ima.createImaApp();
  bootConfig = ima.getClientBootConfig(
    extendBootConfig(getInitialAppConfigFunctions(), {
      initBindApp: parameters?.ima?.initBindApp,
      initRoutes: parameters?.ima?.initRoutes,
      initServicesApp: parameters?.ima?.initServicesApp,
      initSettings: parameters?.ima?.initSettings,
    })
  );

  // Init app
  ima.bootClientApp(app, bootConfig);

  // Update page state
  updateState(app, parameters);

  return {
    app,
    bootConfig,
  };
};
