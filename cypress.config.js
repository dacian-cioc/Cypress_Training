// import { defineConfig } from 'cypress'
// import createBundler from '@bahmutov/cypress-esbuild-preprocessor'

const { defineConfig } = require('cypress');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('file:preprocessor', createBundler())
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports
    },
  },
});

