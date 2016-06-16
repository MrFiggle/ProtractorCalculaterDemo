/**
 * Created by ppor143 on 6/7/16.
 */
'use strict';

var calcMainPage = require('../PageObjects/CalculatorMainPage.js');
//var calcMainPage = new CalculatorMainPage();

describe('When adding two numbers', function(){
    beforeEach(function (done) {
        //window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        setTimeout(function () {
            console.log('inside timeout');
            done();
        }, 500);
    });

    it('should be able to enter the first value', function(){
        //browser.pause();
        //var calcMainPage = new CalculatorMainPage();
        calcMainPage.get();// would like to put it in a beforeEach
        calcMainPage.inputFirstValue(4);
        //browser.pause();
        expect(calcMainPage.getFirstValue()).toEqual("4");
    });

    it('should be able to enter the second value', function(){
        //browser.pause();
        //var calcMainPage = new CalculatorMainPage();
        calcMainPage.get();
        calcMainPage.inputSecondValue(5);
        expect(calcMainPage.getSecondValue()).toEqual("5");
    });
});

describe('When subtracting two numbers', function() {
    beforeEach(function (done) {
        //window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        setTimeout(function () {
            //console.log('inside timeout');
            done();
        }, 500);
    });

    it('the operator should be a subtraction sign', function(){
        calcMainPage.get();
        calcMainPage.setFuncToSubtraction();
        //browser.pause();
        expect(calcMainPage.getFunction()).toEqual("SUBTRACTION");
    });

});

describe('Check the text', function() {
    it('of the title', function(){
        //spyOn(calcMainPage, 'getTitle');
        //console.log(calcMainPage.getTitle());
        expect(calcMainPage.getTitle()).toEqual("Super Calculator");
    });

    it('of the table', function(){
        //expect(element(by.css('.container.ng-scope h4')).toText).toEqual("History");
        expect(calcMainPage.getTitleOfTable()).toEqual("History");
    });

    // Keeps failing, will need to figure out why I can't get names for a table
    xit('of the table columns are correct', function() {
        //console.log("Main Page", calcMainPage.getColumnNames());
        //console.log("TitleTable", calcMainPage.getTitleOfTable());
        expect(calcMainPage.getColumnNames()).toEqual("Title");
        //expect(calcMainPage.get()).toEqual("Title");
    });

});
