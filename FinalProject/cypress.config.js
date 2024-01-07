/* eslint-disable */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1280,
  defaultCommandTimeout: 10000,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito');
          return launchOptions;
        };
      });
    },
    browsers: [
      {
      name: 'chrome',
      family: 'chromium',
      channel: 'stable',
      displayName: 'Chrome',
      version: '120.0.6099.109',
      path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      minSupportedVersion: 64,
      majorVersion: '120',
      },
    ],
    retries: {
      runMode: 0,
      openMode: 0,
    },
    specPattern: 'cypress/**/*.spec.{js,jsx,ts,tsx}',
  },
});
