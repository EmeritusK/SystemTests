const { Builder, By, until, Key, sleep } = require('selenium-webdriver');
const assert = require('assert');




async function clickActionButton(driver,index) {
  try {
      // Esto cambia cada que se edite de nuevo
      const dataKey = 'a4a346f8-0594-4d58-b1b2-e3a0ecd3f7bca4a346f8-0594-4d58-b1b2-e3a0ecd3f7bcactions';  // Asegúrate de que este es el data-key correcto
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

async function contests(driver) {


  addContest(driver);
  //editContest(driver);
  //deleteEvent(driver);
}

async function addContest(driver) {
  let contest = {
    nombre: "Club System Tests",
    descripcion: "DESC",
    responsable: "Mateo Diaz",
    lugar: "Calle 123",
    cant_participantes: "10",
    cant_integrantes_por_equipo : "5",
  };
  try {
    await driver.sleep(2000);
    await driver.findElement(By.id("AddMemberButton")).click();
    await driver.sleep(2000);

    //Dentro del MODAL
    await driver.findElement(By.id("nombre_")).sendKeys(contest.nombre);
    await driver.findElement(By.name("descripcion")).sendKeys(contest.descripcion);
    await driver.findElement(By.name("responsable")).click();
    await driver.findElement(By.name("responsable")).sendKeys(contest.responsable);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ENTER);
    await driver.findElement(By.name("lugar")).sendKeys(contest.lugar);
    await driver.findElement(By.name("cant_participantes")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("cant_participantes")).sendKeys(contest.cant_participantes);
    await driver.findElement(By.name("cant_integrantes_por_equipo")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("cant_integrantes_por_equipo")).sendKeys(contest.cant_integrantes_por_equipo);

    await driver.sleep(2000);
    await driver.findElement(By.id("SubmitButton")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function editContest(driver) {
  let evento = {
    nombre: "Club System Change",
    descripcion: "DESC",
    responsable: "PruebaNombre Madero",
  };
  try {
    await clickActionButton(driver,1);
    await driver.sleep(2000);   
    //Dentro del MODAL
    await driver.findElement(By.name("nombre")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("nombre")).sendKeys(evento.nombre);
    await driver.findElement(By.name("descripcion")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("descripcion")).sendKeys(evento.descripcion);
    await driver.findElement(By.name("responsable")).click();
    await driver.findElement(By.name("responsable")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("responsable")).sendKeys(evento.responsable);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("responsable")).sendKeys(Key.ENTER);
    await driver.sleep(2000);   
    //await driver.findElement(By.id("SubmitButton")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function deleteContest(driver){

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

module.exports = contests;
