var math = (function () {
    'use strict';

    var differentMath = {};
    var result = document.querySelector(".math__result");
    differentMath.result = function(c) {
      result.innerHTML = c;
    }

    differentMath.addition = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a + b;
        differentMath.result(c);
    }

    differentMath.subtraction = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a - b;
        differentMath.result(c);
    }

    differentMath.multiplication = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a * b;
        differentMath.result(c);
    }

    differentMath.division = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a / b;
        differentMath.result(c);
    }

    return differentMath;
})();
