var localStorage = (function() {
    'use strict';

    var LocalStorage = {};
    LocalStorage.storage = function(userList) {
        if (typeof(Storage) !== "undefined") {

            localStorage.setItem("users", JSON.stringify(userList));
            var test = localStorage.getItem("users");
            console.log(test);

        } else {
            userList.innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }

    return LocalStorage;
})();

// localStorage.setItem('test',  JSON.stringify(Users));
// var test = localStorage.getItem('test');
// console.log(test);
