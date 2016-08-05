var app = (function () {
    'use strict';

    var App = {};
    var input = document.querySelector(".text");
    App.go = function() {
        textTransform.alterCase(input);
        changeColor.switchColor(input);
    }

    return App;
})();
