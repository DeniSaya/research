var math = (function () {
    'use strict';

    var differentMath = {};
    differentMath.result = function(c, result) {
      result.innerHTML = c;
    }

    differentMath.addition = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a + b;
        return c;
    }

    differentMath.subtraction = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a - b;
        return c;
    }

    differentMath.multiplication = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a * b;
        return c;
    }

    differentMath.division = function(x, y) {
        var a = parseInt(x.value);
        var b = parseInt(y.value);
        var c = a / b;
        return c;
    }

    return differentMath;
})();
