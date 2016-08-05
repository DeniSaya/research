var math = (function () {
    'use strict';

    var differentMath = {};
    differentMath.addition = function(x, y) {
        var x = parseInt(document.querySelector(".first__number").value);
        var y = parseInt(document.querySelector(".second__number").value);
        var result = x + y;
        document.querySelector(".math__result").innerHTML = result;
    }

    differentMath.subtraction = function(x, y) {

    }

    differentMath.multiplication = function(x, y) {

    }

    differentMath.division = function(x, y) {

    }

    differentMath.mathResult = function() {

    }

    return differentMath;
})();
