const { tab } = require('@testing-library/user-event/dist/tab');
const puppeteer = require('puppeteer')

jest.setTimeout(35000)

test('should click and calculate delivery price ', async () => {

  const browser = await puppeteer.launch({
   
     headless: false,
     slowMo: 80,
     args: ['--window-size=1920s,1080']

  });
   
  const page =  await browser.newPage();
   await page.goto('http://localhost:3000/');
  await page.click('[name="cartValue"]')
  await page.keyboard.press("Backspace") 
  await page.type('[name="cartValue"]','8.9')

  await page.click('[name="deliveryDistance"]')
  await page.keyboard.press("Backspace") 
  await page.type('[name="deliveryDistance"]','1501')

  await page.click('[name="NoOfItems"]') 
  await page.keyboard.press("Backspace")
  await page.type('[name="NoOfItems"]','2')

 
  await page.click('[name="date"]') 
  await page.type('[name="date"]', '23012022')
  await page.keyboard.press("Tab")
  await page.type('[name="date"]' ,'1040')
  await page.$eval('[id=btn_delivery]', el => el.click());
  
  await page.waitForTimeout(10000)
  await page.close()

});

