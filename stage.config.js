const { defineConfig } = require("cypress");

module.exports = defineConfig({
 // reporter: 'cypress-mochawesome-reporter', //fot html reports
  e2e: {

    baseURL:"https://www.amazon.com"
    //setupNodeEvents(on, config) {
      // implement node event listeners here
      //screenshotOnRunFailure=true;
      //require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
 // }, 
});
