const { Builder, By, until, Key, sleep } = require('selenium-webdriver');
const assert = require('assert');




async function clickActionButton(driver,index) {
  try {
      // Esto cambia cada que se edite de nuevo
      const dataKey = 'bbe6593e-8cc5-46e8-8e24-6d34b6eb9095bbe6593e-8cc5-46e8-8e24-6d34b6eb9095actions';  // Asegúrate de que este es el data-key correcto
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

async function clubs(driver) {


  //addClub(driver);
  //editClub(driver);
  //deleteClub(driver);
  //addMemberToClub(driver);
  deleteMemberInClub(driver);
}

async function addClub(driver) {
  let club = {
    nombre: "Club System Tests",
    descripcion: "DESC",
    presidente: "Mateo Diaz",
    ubicacion: "Calle 123",
  };
  try {

    await driver.findElement(By.id("AddMemberButton")).click();
    await driver.sleep(2000);

    //Dentro del MODAL
    await driver.findElement(By.id("nombre_")).sendKeys(club.nombre);
    await driver.findElement(By.id("descripcion_")).sendKeys(club.descripcion);
    await driver.findElement(By.name("presidente")).click();
    await driver.findElement(By.name("presidente")).sendKeys(club.presidente);
    await driver.findElement(By.name("presidente")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("presidente")).sendKeys(Key.ENTER);
    await driver.findElement(By.id("ubicacion_")).sendKeys(club.ubicacion);
    await driver.findElement(By.id("SubmitButton")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function editClub(driver) {
  let club = {
    nombre: "System Test Edit",
    descripcion: "DESC2",
    presidente: "PruebaNombre Madero",
    ubicacion: "Quillan",
  };
  try {

    await clickActionButton(driver,2);
    await driver.sleep(2000);   
    //Dentro del MODAL
    await driver.findElement(By.name("nombre")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("nombre")).sendKeys(club.nombre);
    await driver.findElement(By.name("descripcion")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("descripcion")).sendKeys(club.descripcion);
    await driver.findElement(By.name("presidente")).click();
    await driver.findElement(By.name("presidente")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("presidente")).sendKeys(club.presidente);
    await driver.findElement(By.name("presidente")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("presidente")).sendKeys(Key.ENTER);
    await driver.findElement(By.name("ubicacion")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("ubicacion")).sendKeys(club.ubicacion);
    await driver.sleep(2000);   
    await driver.findElement(By.id("SubmitButton")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function deleteClub(driver){

  try {
    await driver.sleep(2000);
    await clickActionButton(driver,3);
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//button[text()='Eliminar']")).click();
    await driver.sleep(2000);

  } finally {
    //await driver.quit();
  }
}

async function addMemberToClub(driver){
  try {
    await driver.sleep(2000);
    await clickActionButton(driver,1);
    await driver.sleep(2000);

    await driver.findElement(By.name("search")).click();
    await driver.findElement(By.name("search")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    //El miembro no tiene que estar registrado
    await driver.findElement(By.name("search")).sendKeys('will');
    await driver.findElement(By.name("search")).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.name("search")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath("//button[text()='Agregar']")).click();
    await driver.sleep(2000);

  } finally {
    //await driver.quit();
  }
}

async function deleteMemberInClub(driver){
  try {
    await driver.sleep(2000);
    await clickActionButton(driver,1);
    await driver.sleep(2000);
    //Esto cambia igual de acuerod a lo que se vaya a eliminar
    await driver.findElement(By.id("deleteButton_30bee5df-adac-4144-a3ed-a4acdd23a16b__$")).click();

    await driver.sleep(2000);

  } finally {
    //await driver.quit();
  }
}





module.exports = clubs;
