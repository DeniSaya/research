var app = (function () {
    'use strict';

    var App = {};
    var input = document.querySelector(".text");
    App.go = function() {
        textTransform.alterCase(input);
        changeColor.switchColor(input);
    }
    App.addition = function() {
        math.addition();
    }
    App.subtraction = function() {
        math.subtraction();
    }
    App.multiplication = function() {
        math.multiplication();
    }

    App.division = function() {
        math.division();
    }

    return App;
})();
