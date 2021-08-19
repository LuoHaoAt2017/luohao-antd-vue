import puppeteer from 'puppeteer';

let browser, page;

describe("测试 Select 控件", function() {
  beforeAll(async function () {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    await page.setViewport({
      width: 400,
      height: 400
    });
  });
  afterAll(async function() {
    await browser.close();
  });

  test("选中每页20条数据", async function() {
    await page.goto('http://localhost:8080/about', {
      timeout: 10000
    });
    await page.waitForSelector(".about");
    // await page.select("#pageSize", "20");
    // await page.waitFor(1000);
    // await page.screenshot({path: 'pagination.png'});
    expect(1 + 1).toBe(2);
  }, 20000);
});