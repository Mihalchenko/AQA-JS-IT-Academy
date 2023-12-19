const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.spec.{js,jsx,ts,tsx}',
  },
});
