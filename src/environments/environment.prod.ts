// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: true,
  // version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
  APPName: 'Organisation Intelligence',
  CoreApiDomain: 'https://orgintel-dev-cd.sbp.eyclienthub.com',
  CoreApiPrefix: '/api',
  config: {
    tenant: 'eygs.onmicrosoft.com',
    clientId: 'e8680160-3b27-4c78-8c0e-6a6a1e6ca2c1',
    cacheLocation: 'sessionStorage',
    endpoints: {
      'https:// orgintel-dev-cd.sbp.eyclienthub.com':
        'e8680160-3b27-4c78-8c0e-6a6a1e6ca2c1'
    }
  },
  postLogoutRedirectUri: 'http://localhost:4200/logout.html'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
