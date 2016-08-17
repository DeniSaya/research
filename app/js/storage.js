var store = (function() {
    'use strict';

    var LocalStorage = {};
    LocalStorage.storage = function(Users) {
        localStorage.setItem('users',  JSON.stringify(Users));
        var store = JSON.parse(localStorage.getItem('users'));
        console.log(store);
    }

    return LocalStorage;
})();
