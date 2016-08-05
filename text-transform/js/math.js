var math = (function () {
    'use strict';

    var differentMath = {};
    differentMath.addition = function(x, y) {
        var x = parseInt(document.querySelector(".first__number").value);
        var y = parseInt(document.querySelector(".second__number").value);
        var z = x + y;
        document.querySelector(".math__result").innerHTML = z;
    }

    differentMath.subtraction = function(x, y) {
        var x = parseInt(document.querySelector(".first__number").value);
        var y = parseInt(document.querySelector(".second__number").value);
        var z = x - y;
        document.querySelector(".math__result").innerHTML = z;
    }

    differentMath.multiplication = function(x, y) {
        var x = parseInt(document.querySelector(".first__number").value);
        var y = parseInt(document.querySelector(".second__number").value);
        var z = x * y;
        document.querySelector(".math__result").innerHTML = z;
    }

    differentMath.division = function(x, y) {
        var x = parseInt(document.querySelector(".first__number").value);
        var y = parseInt(document.querySelector(".second__number").value);
        var z = x / y;
        document.querySelector(".math__result").innerHTML = z;
    }

    differentMath.mathResult = function() {

    }

    return differentMath;
})();
