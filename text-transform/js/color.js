var changeColor = (function () {
    'use strict';

    var ChangeColor = {};
    ChangeColor.switchColor = function(input) {
        input.classList.toggle('text--red');
    }

    return ChangeColor;
})();
