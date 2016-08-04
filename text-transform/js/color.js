var changeColor = (function () {
    'use strict';

    var ChangeColor = {};
    ChangeColor.switchColor = function() {
        var input = document.querySelector(".text");
        input.classList.toggle('text--red');
    }

    return ChangeColor;
})();
