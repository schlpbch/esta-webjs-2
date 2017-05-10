// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

var ip = require('ip');

module.exports = function (config) {

    var seleniumWebgrid = {
        hostname: 'webtestgrid.sbb.ch',
        port: 4444
    };

    config.set({
        hostname: process.env.host || ip.address(),
        basePath: __dirname,
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-nightmare'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-webdriver-launcher'),
            require('@angular/cli/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            {pattern: './src/test.ts', watched: false}
        ],
        preprocessors: {
            './src/test.ts': ['@angular/cli']
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'coverage-istanbul']
            : ['progress', 'kjhtml'],
        port: process.env.externalport || 7777,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        customLaunchers: {
            'SeleniumCH': {
                base: 'WebDriver',
                config: seleniumWebgrid,
                browserName: 'chrome'
            },
            'SeleniumFF': {
                base: 'WebDriver',
                config: seleniumWebgrid,
                browserName: 'firefox'
            },
            'SeleniumIE': {
                base: 'WebDriver',
                config: seleniumWebgrid,
                browserName: 'internet explorer',
                'x-ua-compatible': 'IE=edge'
            }
        },
        browsers: ['Nightmare'],
        singleRun: true
    });
};
