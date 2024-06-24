const { Builder, By, until, Key, sleep } = require('selenium-webdriver');
const assert = require('assert');

async function members(driver) {

  let selectCareerScript = `
      const spans = document.querySelectorAll('span');
      spans.forEach(span => {
        if (span.textContent.trim() === 'Software') {
          span.click();
          console.log('Clic realizado en el elemento con texto!');
        }
      });
    `;

  let selectSemesterScript = `
      const spans = document.querySelectorAll('span');
      spans.forEach(span => {
        if (span.textContent.trim() === '6') {
          span.click();
          console.log('Clic realizado en el elemento con texto!');
        }
      });
    `;

  let selectRolScript = `
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
      if (span.textContent.trim() === 'Vocal') {
        span.click();
        console.log('Clic realizado en el elemento con texto!');
      }
    });
  `;

  //addMember(driver, selectCareerScript, selectSemesterScript, selectRolScript);
  //editMember(driver, selectCareerScript, selectSemesterScript, selectRolScript);
  //deleteMember(driver, selectCareerScript, selectSemesterScript, selectRolScript);
}

async function clickActionButton(driver,index) {
  try {
      // Esto cambia cada que se edite de nuevo
      const dataKey = '00b84c46-967e-4423-9084-cf17376dfb5300b84c46-967e-4423-9084-cf17376dfb53actions';  // Asegúrate de que este es el data-key correcto
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

async function addMember(driver, selectCareerScript, selectSemesterScript, selectRolScript) {
  let miembro = {
    cedula: "7777777777",
    nombre: "Jair",
    apellido: "Paredes",
    telefono: "0987654321",
    correo: "correotest2@gmail.com",
    fecha_nacimiento: "26072001",
    carrera: "Software",
    semestre: "6",
    fecha_nacimiento: "26072001"
  };
  try {
    await driver.findElement(By.id("AddMemberButton")).click();
    await driver.sleep(2000);

    //Dentro del MODAL
    await driver.findElement(By.id("cedula_")).sendKeys(miembro.cedula);
    await driver.findElement(By.id("nombre_")).sendKeys(miembro.nombre);
    await driver.findElement(By.id("apellido_")).sendKeys(miembro.apellido);
    await driver.findElement(By.id("telefono_")).sendKeys(miembro.telefono);
    await driver.findElement(By.id("correo_")).sendKeys(miembro.correo);
    await driver.findElement(By.id("carrera_")).click();
    await driver.executeScript(selectCareerScript);
    await driver.sleep(1000);
    await driver.findElement(By.id("semestre_")).click();
    await driver.executeScript(selectSemesterScript);
    await driver.sleep(1000);
    await driver.findElement(By.id("rol_")).click();
    await driver.executeScript(selectRolScript);
    await driver.sleep(2000);
    await driver.findElement(By.id("CloseButton")).click();
    //Fecha NO vale

  } finally {
    //await driver.quit();
  }

}

async function editMember(driver, selectCareerScript, selectSemesterScript, selectRolScript){
  let miembro = {
    cedula: "7777777777",
    nombre: "Jair",
    apellido: "Paredes",
    telefono: "0987654321",
    fecha_nacimiento: "26072001",
    carrera: "Software",
    semestre: "6",
    fecha_nacimiento: "26072001"
  };
  try {
    await driver.sleep(2000);
    await clickActionButton(driver,1);
    await driver.sleep(2000);

    //Dentro del MODAL
    await driver.findElement(By.name("cedula")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("cedula")).sendKeys(miembro.cedula);
    await driver.findElement(By.name("nombre")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("nombre")).sendKeys(miembro.nombre);
    await driver.findElement(By.name("apellido")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("apellido")).sendKeys(miembro.apellido);
    await driver.findElement(By.name("telefono")).sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await driver.findElement(By.name("telefono")).sendKeys(miembro.telefono);
    await driver.findElement(By.id("SubmitButton")).click();
    await driver.sleep(2000);
  } finally {
    //await driver.quit();
  }
}

async function deleteMember(driver, selectCareerScript, selectSemesterScript, selectRolScript){

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


module.exports = members;

