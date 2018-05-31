const itParam = require('mocha-param').itParam;
const expect = require('expect');
const addContext = require('mochawesome/addContext');
const Mocha = require('mocha');

const assert = require('assert');
const selenium = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const firefox = require('selenium-webdriver/firefox');

describe('Caso de prueba patito', () => {
    it('Prueba 1', function(){
        addContext(this, 'Identificador : ');
        addContext(this, 'Función a probar :');
        addContext(this, 'Objetivo : ');
        addContext(this, 'Descripción : ');
        addContext(this, 'Precondiciones : ');
        addContext(this, {
            title: 'Criterios de aceptación',
            value: {criterio1: 1, criterio2: 2}
        });
        expect(1).toBe(1);
    });
});



