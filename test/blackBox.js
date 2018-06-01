const itParam = require('mocha-param').itParam;
const expect = require('expect');
const addContext = require('mochawesome/addContext');
const Mocha = require('mocha');
const assert = require('assert');
const selenium = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const firefox = require('selenium-webdriver/firefox');

const url = '172.24.91.166';
let driver;
let x = 0;

describe('Pruebas de Caja Negra Chrome', () => {
    beforeEach(async function () {
        x++;
        this.timeout(2225000);
        driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build();
        await driver.get(`http://${url}/Transportec/`);
    });

    afterEach(function () {
       driver.quit();
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('4:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message.length > 0, true, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('43:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        console.log(message);
        assert.equal(message.length > 0, true, 'Campos vacios');
    });

     it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000); 
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        console.log(message);
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message, 'Seleccione hora de llegada del pasajero');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        // await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        console.log(message);
        assert.equal(message, 'Pasajero Agregado');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Pasajero Agregado');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('123456787654323');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        // Debería de fallar porque el formato de la cédula es incorrecto

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 2
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-02727384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        // await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no coincida con provincia
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('San Carlos');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('cedula con letras y sin números');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
       
        assert.equal(message.length > 0, true, 'Campos vacios');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        // 
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');
        // Número de teléfono con formato incorrecto #1
        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('02987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
 
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');
        // Número de teléfono con formato incorrecto #2
        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('02987a2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
 
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

});


describe('Pruebas de Caja Negra Firefox', () => {
    beforeEach(async function () {
        x++;
        this.timeout(2225000);
        driver = new selenium.Builder().forBrowser("firefox").build();
        await driver.get(`http://${url}/Transportec/`);
    });

    afterEach(function () {
       driver.quit();
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('4:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message.length > 0, true, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('43:50PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')),1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        console.log(message);
        assert.equal(message.length > 0, true, 'Campos vacios');
    });

     it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000); 
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        console.log(message);
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
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

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
        assert.equal(message, 'Seleccione hora de llegada del pasajero');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        // await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        console.log(message);
        assert.equal(message, 'Pasajero Agregado');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-0272-7384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Pasajero Agregado');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('123456787654323');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        // Debería de fallar porque el formato de la cédula es incorrecto

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 2
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-02727384');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Tibás');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        // await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no coincida con provincia
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('San Carlos');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('cedula con letras y sin números');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/p')).getText();
       
        assert.equal(message.length > 0, true, 'Campos vacios');
    });


    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');

        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('2987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
        // 
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');
        // Número de teléfono con formato incorrecto #1
        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('02987-2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
 
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

    it(`Caso de prueba ${x}`, async function () {
        addContext(this, 'Caso de prueba: Caso de prueba # ' + x);
        addContext(this, "Identificador: Cp: " + x);
        addContext(this, "Funcion a probar: Crear reserva");
        addContext(this, "Objetivo: verificar que la reserva se realice de manera correcta sin importar la combinación de los datos de entrada");
        addContext(this, "Descripcion: Se intenta realizar una reserva con cierta combinación de parámetros");
        addContext(this, "Precondiciones: que el servidor este arriba y estar conectado a la misma red del servidor");
        addContext(this, 'Criterios de aceptacion: mensaje de aceptación');

        this.timeout(15000);

        await driver.findElement(selenium.By.id('departureHour')).sendKeys('03:50PM');
        await driver.findElement(selenium.By.id('arrivalHour')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('departureDate')).sendKeys('26/11/2018');
        await driver.findElement(selenium.By.id('arrivalDate')).sendKeys('27/11/2018');

        await driver.findElement(selenium.By.id('btnCheck')).click();
        //await driver.findElement(selenium.By.xpath('/html/body/div[4]/div[7]/div/button')).click();

        await driver.findElement(selenium.By.id('vehicleIdSelect')).sendKeys('10');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[1]/div[2]/select')).sendKeys('si');
        await driver.findElement(selenium.By.id('responsable')).sendKeys('prueba');
        // Número de teléfono con formato incorrecto #2
        await driver.findElement(selenium.By.id('responsableTelephone')).sendKeys('02987a2376');
        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[3]/div[1]/select')).sendKeys('Administrativo');
 
        await driver.findElement(selenium.By.id('functionalCenter')).sendKeys('Administracion');
        await driver.findElement(selenium.By.id('provinceSetect')).sendKeys('San José');
        // Cantón que no existe
        await driver.findElement(selenium.By.id('citiesSetect')).sendKeys('Chambakú');
        await driver.findElement(selenium.By.id('disctrictSetect')).sendKeys('cinco esquinas');
        await driver.findElement(selenium.By.id('justification')).sendKeys('porque si');

        // Con el formato de la cédula incorrecto 3
        await driver.findElement(selenium.By.id('identificationE')).sendKeys('2-273-84');
        await driver.findElement(selenium.By.id('firstNameE')).sendKeys('Josue');
        await driver.findElement(selenium.By.id('lastNameE')).sendKeys('Esquivel');
        await driver.findElement(selenium.By.id('placeToCollectE')).sendKeys('lo que sea');
        await driver.findElement(selenium.By.id('placeToLeaveE')).sendKeys('La bola');
        await driver.findElement(selenium.By.id('departureHourE')).sendKeys('3:50PM');
        await driver.findElement(selenium.By.id('arrivalHourE')).sendKeys('3:50:PM');

        await driver.findElement(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/div[11]/div[1]/button')).click();
        var button = await driver.wait(selenium.until.elementLocated(selenium.By.xpath('/html/body/section[2]/div/div/div/div/div[2]/form[2]/button[2]')), 1000000);
        button.click();

        let message = await driver.findElement(selenium.By.xpath('/html/body/div[4]/h2')).getText();
        assert.equal(message, 'Campos vacios');
    });

});

