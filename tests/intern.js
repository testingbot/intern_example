define({


proxyPort: 9000,
    proxyUrl: 'http://localhost:9000/',
    capabilities: {
    },
    environments: [
{ browserName: 'chrome', version: '45', platform: 'VISTA' }
    ],
    maxConcurrency: 3,
    tunnel: "TestingBotTunnel",
    webdriver: {
        host: 'http://hub.testingbot.com/wd/hub',
        username: 'key',
        accessKey: 'secret'
    },
tunnelOptions: {
    verbose: true,
	apiKey: "key",
	apiSecret: "secret"
  },
    useSauceConnect: false,
    loaderOptions: {
        packages: [ 
        {
            name: "dojo",
            location: 'vendor/dojo'
        } 
        ]
    },
    suites: [ "tests/test" ],
    excludeInstrumentation: /^(?:tests|node_modules)\//
});
