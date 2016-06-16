// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['CalculatorMainPage.js'],
    capabilities: {
        'browserName': 'chrome'
    },


    suites: {
        homepage: 'Tests/homepage/homepageSpec.js',
        pageObjects: 'Tests/PageObjects/CalculatorMainPage.js'
    }

};


/*
//An example configuration file
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // capabilities to be passed to the webdriver instance
    capabilities: {
        'browserName': 'chrome'
    },

    // Indicate which tests can run. Could use wild card to run a batch of tests.
    specs: ['zoo_spec.js'],

    // Options to be passed to Jasmine node
    jasmineNodeOpt: {
        showColors: true,
        defaultTimeoutInterval: 3000
    }

};
*/