exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: [
        'tests/**/*js'
    ],
    maxInstances: 1,
    capabilities: [
      {
        browserName: 'chrome',
        browserVersion: '88.0',
        "moon:options": {
            "enableVNC": true,
			"mobileDevice": {
				"deviceName": "Apple iPhone 11",
				"orientation": "landscape"
			}
        }
      }
    ],
    logLevel: 'debug',
    framework: 'mocha',
    reporters: ['dot','spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
