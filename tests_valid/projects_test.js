const { Builder, By, until, Key, sleep } = require('selenium-webdriver');
const assert = require('assert')

async function clickActionButton(driver,index) {
  try {
      // Esto cambia cada que se edite de nuevo
      const dataKey = 'daf0c778-d773-494a-9df1-ab77be01b071daf0c778-d773-494a-9df1-ab77be01b071actions';  // Asegúrate de que este es el data-key correcto
      const selector = `td[data-key="${dataKey}"] span > svg`;

      await driver.wait(until.elementsLocated(By.css(selector)), 10000);

      const elements = await driver.findElements(By.css(selector));

      if (elements.length > 1) {
          await elements[index].click();
      } else {
          console.error('No se encontró el segundo SVG');
      }
  } catch (error) {
      console.error('Error al hacer clic en el SVG en la primera fila:', error);
  }
}


async function projects(driver) {


  //addProject(driver);
  //editProject(driver);
  //deleteProject(driver);
}

async function addProject(driver) {
  let project = {
    nombre: "sYSTEMS Tests",
    descripcion: "DESC",
    responsable: "Este es el bueno",
  };
  try {
    await driver.sleep(2000);
    await driver.findElement(By.id("AddMemberButton")).click();
    await driver.sleep(2000);

    //Dentro del MODAL
    await driver.findElement(By.name("nombre")).sendKeys(project.nombre);
    await driver.findElement(By.name("descripcion")).sendKeys(project.descripcion);
    await driver.findElement(By.name("responsable")).click();
    await driver.findElement(By.name("responsable")).sendKeys(project.responsable);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath("//button[text()='Registrar']")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function editProject(driver) {
  let project = {
    nombre: "sYSTEMS Change",
    descripcion: "DESC",
    responsable: "Club Manual",
  };
  try {
    await clickActionButton(driver,1);
    await driver.sleep(2000);   
    //Dentro del MODAL
    await driver.findElement(By.name("nombre")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("nombre")).sendKeys(project.nombre);
    await driver.findElement(By.name("descripcion")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("descripcion")).sendKeys(project.descripcion);
    await driver.findElement(By.name("responsable")).click();
    await driver.findElement(By.name("responsable")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("responsable")).sendKeys(project.responsable);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ENTER);
    await driver.sleep(2000);   
    //await driver.findElement(By.xpath("//button[text()='Registrar']")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function deleteProject(driver){

  try {
    await driver.sleep(2000);
    await clickActionButton(driver,2);
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//button[text()='Eliminar']")).click();
    await driver.sleep(2000);

  } finally {
    //await driver.quit();
  }
}




module.exports = projects;
