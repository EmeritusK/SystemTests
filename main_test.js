const { Builder, By, Key, until , sleep} = require('selenium-webdriver');
//Export TESTS
const login = require('./tests_valid/login_test'); 
const members = require('./tests_valid/members_test');
const clubs = require('./tests_valid/clubs_test');
const eventos = require('./tests_valid/events_test');
const contests = require('./tests_valid/contests_test');
const projects = require('./tests_valid/projects_test');

(async function CorrectDataTests() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await login(driver); 
    //await driver.get('http://localhost:3000/miembros');
    //await members(driver);
    // await driver.get('http://localhost:3000/clubes');
    // await clubs(driver);
    // await driver.get('http://localhost:3000/eventos');
    // await eventos(driver);
    // await driver.get('http://localhost:3000/eventos/a4a346f8-0594-4d58-b1b2-e3a0ecd3f7bc');
    // await contests(driver);
    await driver.get('http://localhost:3000/proyectos');
    await projects(driver);
  } finally {

  }
})();
