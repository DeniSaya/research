var app = (function () {
    'use strict';

    var App = {};
    var input = document.querySelector(".text");
    var x = document.querySelector(".js-first-number");
    var y = document.querySelector(".js-second-number");
    var result = document.querySelector(".js-math-result");
    
    App.go = function() {
        textTransform.alterCase(input);
        changeColor.switchColor(input);
    }
    App.addition = function() {
        math.result(math.addition(x, y), result);
    }

    App.subtraction = function() {
        math.result(math.subtraction(x, y), result);
    }

    App.multiplication = function() {
        math.result(math.multiplication(x, y), result);
    }

    App.division = function() {
        math.result(math.division(x, y), result);
    }

    return App;
})();
