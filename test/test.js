var assert = require('assert');
var selenium = require('selenium-webdriver');
var firefox = require('selenium-webdriver/firefox');
var geckodriver = require('geckodriver');
const chromedriver = require('chromedriver');
const addContext = require('mochawesome/addContext');

var driver;
var x=0;

/*describe('Pruebas login con Google Chrome', () => {

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

describe('Pruebas login con Mozilla Firefox', () => {

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

});*/

/*describe('pruebas de caja negra Google Chrome', () => {
    beforeEach(async function() {
        this.timeout(25000);
        x++;
        driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build();
        await driver.get("http://localhost/transporTEC/users/#/user");
    });

    afterEach(() => {
        driver.quit();
    });

    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message, 'Reserva se realizo correctamente');
        
    });

    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('-03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();
        
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message,'No existen autos disponibles en la fecha solicitada');
        
    });
    
});*/

describe('pruebas de caja negra Mozilla Firefox', () => {
    beforeEach(async function() {
        this.timeout(25000);
        x++;
        driver = new selenium.Builder().forBrowser('firefox').build();
        await driver.get("http://localhost/transporTEC/users/#/user");
    });

    afterEach(() => {
        driver.quit();
    });

    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message, 'Reserva se realizo correctamente');
        
    });

    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('-03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();
        
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();
    
        
        assert.equal(message, 'No existen autos disponibles en la fecha solicitada');
        
    });

    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('-03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();
        
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();
    
        
        assert.equal(message, 'No existen autos disponibles en la fecha solicitada');
        
    });

    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('-03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('28/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();
        
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();
    
        
        assert.equal(message, 'No existen autos disponibles en la fecha solicitada');
        
    });
    it('Caso de prueba ' + x, async function () {
        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('-03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('-27/11/2018');


        await driver.findElement(selenium.By.id('btnCheck')).click();
        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();
        
        
        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('7418');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Académico');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('lo que sea 30');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('03:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();
    
        
        assert.equal(message, 'No existen autos disponibles en la fecha solicitada');
        
    });

    
});

