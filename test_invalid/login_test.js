const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Test 1', function() {
  it('should have the correct title', async function() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:3000/home');

      let email = "jairparedesal123@gmail.com";
      let password = "123456";
      
      await driver.findElement(By.id('email')).sendKeys(email);
      await driver.findElement(By.id('password')).sendKeys(password);
  
    } finally {
      //await driver.quit();
    }
  });
});
