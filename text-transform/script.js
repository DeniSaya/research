var textTransform = (function () {
    'use strict';

    var TextTransform = {};
    var checkCase = function(letter) {
        var upper = letter.toUpperCase();
        if ( letter == upper ) {
            upper = letter.toLowerCase();
        } return upper;
    }

    TextTransform.alterCase = function() {
        var input = document.querySelector("#text");
        var str = input.value;
        var result = "";
        for (var i = 0; i < str.length; i++) {
            result += checkCase(str.charAt(i)) + "";
        }
        input.value = result;
    }

    return TextTransform;
})();

var changeColor = (function () {
    'use strict';
    var button = document.querySelector(".button");
    button.className.add("button--red");

})();
