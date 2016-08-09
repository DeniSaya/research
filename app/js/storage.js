var localStorage = (function() {
    'use strict';

    var LocalStorage = {};
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem(Users[i]);
        // Retrieve
        userList.innerHTML = localStorage.getItem(Users[i]);
    } else {
        userList.innerHTML = "Sorry, your browser does not support Web Storage...";
    }

    return LocalStorage;
})();
