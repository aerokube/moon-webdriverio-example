const assert = require('assert');

describe('DuckDuckGo page', function () {
    it('should have the right title', async function () {
        await browser.url('https://duckduckgo.com/');
        const title = await browser.getTitle();
        browser.saveScreenshot('screenshot.png');
        assert.strictEqual(title, 'DuckDuckGo — Privacy, simplified.');
    });
});
