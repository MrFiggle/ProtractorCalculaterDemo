//var CalculatorMainPage = function() {
module.exports = {
    var: firstInputValueField = element(by.model('first')),
    var: secondInputValue = element(by.model('second')),
    var: operator = element(by.model('operator')),
    // get text of header Super Calculator
    var: title = element(by.css('.container.ng-scope div h3')),
    var: titleTable = element(by.css('.container.ng-scope h4')),
    //var columnNames = element(by.css('.table thead tr th'));
    var: columnNames = element.all(by.xpath('//html/body/div[1]/table/thead/tr/th[1]')),
    /*
     var columnNames = element.all(by.css('.table thead tr th')).map(function(elm) {
     return elm.getText();
     });
     */

    get: function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    },

    // Set the value of the first operand
    inputFirstValue: function (value) {
        firstInputValueField.sendKeys(value);
    },

    // Set the value of the second operand
    inputSecondValue: function (value) {
        secondInputValue.sendKeys(value);
    },

    // Get the value of the first operand
    getFirstValue: function () {
        var firstInputValue = element(by.model('first')).getAttribute('value');
        return firstInputValue;
    },

    // Get the value of the second operand
    getSecondValue: function () {
        var secondInputValue = element(by.model('second')).getAttribute('value');
        return secondInputValue;
    },

    // Set the operator to Subtraction
    setFuncToSubtraction: function () {
        operator.$('[value="SUBTRACTION"]').click();
    },

    // Set the operator to Addition
    setFuncToAddition: function () {
        operator.$('[value="ADDITION"]').click();
    },

    // Return the current operator
    getFunction: function () {
        return operator.getAttribute('value');
    },

    // Return the title of the page
    getTitle: function () {
        return title.getText();
    },

    // Return the title of the table
    getTitleOfTable: function () {
        return titleTable.getText();
    },

    // Return the column names
    getColumnNames: function () {
        return columnNames;
    }
}

//}

// **********************************************************************
