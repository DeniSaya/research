var app = (function () {
    'use strict';

    var App = {};
    var input = document.querySelector(".text");
    var x = document.querySelector(".first__number");
    var y = document.querySelector(".second__number");
    App.go = function() {
        textTransform.alterCase(input);
        changeColor.switchColor(input);
    }
    App.addition = function() {
        math.addition(x, y);
    }

    App.subtraction = function() {
        math.subtraction(x, y);
    }

    App.multiplication = function() {
        math.multiplication(x, y);
    }

    App.division = function() {
        math.division(x, y);
    }

    App.result = function() {
      math.result(c);
    }
    return App;

})();
