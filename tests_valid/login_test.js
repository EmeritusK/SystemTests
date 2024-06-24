const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

async function login(driver) {
    try {
      await driver.get('http://localhost:3000/home');

      let email = "jairparedesal123@gmail.com";
      let password = "123456";
      
      await driver.findElement(By.id('email')).sendKeys(email);
      await driver.findElement(By.id('password')).sendKeys(password);
      await driver.findElement(By.xpath("//button[text()='Iniciar Sesion']")).click();
      await driver.sleep(3000); 
    } finally {
      //await driver.quit();
    }
}

module.exports = login;

