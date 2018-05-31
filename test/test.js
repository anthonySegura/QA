var assert = require('assert');
var selenium = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
var geckodriver = require('geckodriver');
const chromedriver = require('chromedriver');
const addContext = require('mochawesome/addContext');

var driver;
var x=0;

describe('Pruebas login con google chrome', () => {

    beforeEach(async function() {
        this.timeout(25000);
        x++;
        driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build();
        await driver.get("http://172.24.4.41/Transportec/");
    });

    afterEach(() => {
       driver.quit();
    });

    it('Sin datos', async function() {
        this.timeout(15000);

        addContext(this, 'Caso de prueba: Inicio de session sin datos' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar sin datos en la aplicacion");
        addContext(this,"Descripcion: se inteta iniciar sesion sin ningun dato en los campos requeridos");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,"Criterios de aceptacion: mensaje de error que muestre que hacen falta los campos");

        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message = await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');

    });

    it('Sin contraseña', async function() {
        this.timeout(15000);


        addContext(this, 'Caso de prueba: Inicio de session sin contraseña' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar sin contraseña en la aplicacion");
        addContext(this,"Descripcion: se inteta iniciar sesion sin el dato contraseña en el campos requerido");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,'Criterios de aceptacion: mensaje de error "usuario o contraseña incorrecta"');

        await driver.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
        await driver.findElement(selenium.By.id('botonSubmit')).click();
        var message = await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

    it('Contraseña Incorrecta', async function() {
        this.timeout(15000);

        addContext(this, 'Caso de prueba: Inicio de session con contraseña incorrecta' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar con una contraseña incorrecta");
        addContext(this,"Descripcion: se inteta iniciar sesion con una contraseña que no corresponde al usuario");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,'Criterios de aceptacion: mensaje de error "usuario o contraseña incorrecta"');

        await driver.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
        await driver.findElement(selenium.By.id('inputContraseña')).sendKeys('12');
        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message =  await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

    it('Usuario en blanco con una contraseña correcta', async function() {
        this.timeout(15000);

        addContext(this, 'Caso de prueba: Inicio de session con contraseña correcta pero sin usuario' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar con una contraseña correcta y sin un usuario");
        addContext(this,"Descripcion: se inteta iniciar sesion con una contraseña pero sin un usuario");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,'Criterios de aceptacion: mensaje de error "usuario o contraseña incorrecta"');

        await driver.findElement(selenium.By.id('inputContraseña')).sendKeys('12');
        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message =  await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

});

describe('Pruebas login con mozila firefox', () => {

    beforeEach(async function() {
        this.timeout(25000);
        x++;
        driver = new selenium.Builder().forBrowser('firefox').build();
        await driver.get("http://172.24.4.41/Transportec/");
    });

    afterEach(() => {
       driver.quit();
    });

    it('Sin datos', async function() {
        this.timeout(15000);

        addContext(this, 'Caso de prueba: Inicio de session sin datos' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar sin datos en la aplicacion");
        addContext(this,"Descripcion: se inteta iniciar sesion sin ningun dato en los campos requeridos");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,"Criterios de aceptacion: mensaje de error que muestre que hacen falta los campos");

        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message = await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');

    });

    it('Sin contraseña', async function() {
        this.timeout(15000);


        addContext(this, 'Caso de prueba: Inicio de session sin contraseña' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar sin contraseña en la aplicacion");
        addContext(this,"Descripcion: se inteta iniciar sesion sin el dato contraseña en el campos requerido");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,'Criterios de aceptacion: mensaje de error "usuario o contraseña incorrecta"');

        await driver.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
        await driver.findElement(selenium.By.id('botonSubmit')).click();
        var message = await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

    it('Contraseña Incorrecta', async function() {
        this.timeout(15000);

        addContext(this, 'Caso de prueba: Inicio de session con contraseña incorrecta' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar con una contraseña incorrecta");
        addContext(this,"Descripcion: se inteta iniciar sesion con una contraseña que no corresponde al usuario");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,'Criterios de aceptacion: mensaje de error "usuario o contraseña incorrecta"');

        await driver.findElement(selenium.By.id('inputUsuario')).sendKeys('erick');
        await driver.findElement(selenium.By.id('inputContraseña')).sendKeys('12');
        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message =  await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

    it('Usuario en blanco con una contraseña correcta', async function() {
        this.timeout(15000);

        addContext(this, 'Caso de prueba: Inicio de session con contraseña correcta pero sin usuario' );
        addContext(this, "Identificador: Cp"+x);
        addContext(this, "Funcion a probar: login");
        addContext(this,"Objetivo: verificar que no se pueda ingresar con una contraseña correcta y sin un usuario");
        addContext(this,"Descripcion: se inteta iniciar sesion con una contraseña pero sin un usuario");
        addContext(this,"Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this,'Criterios de aceptacion: mensaje de error "usuario o contraseña incorrecta"');

        await driver.findElement(selenium.By.id('inputContraseña')).sendKeys('12');
        await driver.findElement(selenium.By.id('botonSubmit')).click();

        var message =  await driver.findElement(selenium.By.xpath('//*[@id="loginBody"]/div[4]/p')).getText();
        assert.equal(message,'Nombre de usuario o contraseña incorrectas.');
    });

});

