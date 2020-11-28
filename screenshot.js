const puppeteer = require('puppeteer');

exports.screenshot = async function(url, options) {
    const browser = await puppeteer.launch({
        headless: true,
        timeout: 60 * 60 * 10,
        defaultViewport: {
            width: options.width || 800,
            height: options.height || 600,
            landscape: options.landscape
        }
    })

    const page = await browser.newPage()

    await page.goto(url, {
        waitUntil: 'networkidle0'
    })

    buffer = await page.screenshot({
        fullPage: options.fullPage,
    });

    browser.close()

    return buffer
}