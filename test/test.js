var assert = require('assert');
var selenium = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
var geckodriver = require('geckodriver');
const chromedriver = require('chromedriver');

var driver;

async function iniciarSecion(controlador){
    await controlador.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
    await controlador.findElement(selenium.By.id('inputContraseña')).sendKeys('12345');
    await controlador.findElement(selenium.By.id('botonSubmit')).click();
}

describe('Pruebas login', () => {

    beforeEach(async function() {
        this.timeout(25000);
        driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build();
        await driver.get("http://localhost:63342/Proyecto-Trasportes/index.html");
    });

    afterEach(() => {
       driver.quit();
    });

    it('Sin datos', async function() {
        this.timeout(15000);
        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message = await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');

    });

    it('Sin contraseña', async function() {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
        await driver.findElement(selenium.By.id('botonSubmit')).click();
        var message = await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

    it('Contraseña Incorrecta', async function() {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
        await driver.findElement(selenium.By.id('inputContraseña')).sendKeys('12');
        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message =  await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });
});

describe('Pruebas caja negra', () => {
    beforeEach(async function() {
        this.timeout(25000);
        driver = new selenium.Builder().forBrowser('firefox').build();
        await driver.get("http://localhost:63342/Proyecto-Trasportes/users/#/user");
    });

    afterEach(() => {
        driver.quit();
    });

    it('prueba',async function () {
        await driver.findElement(selenium.By.xpath('//*[@id="reservationTab"]/a')).click();
        await driver.findElement(selenium.By.xpath('//*[@id="departureHour"]'));

    });
    
});

