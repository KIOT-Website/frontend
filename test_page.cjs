const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
    
    await page.goto('http://localhost:5173/research/electronics-&-computer-engineering');
    await page.waitForTimeout(3000); // Wait to see if error happens
    
    await browser.close();
})();
