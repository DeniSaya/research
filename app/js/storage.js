var localStorage = (function() {
    'use strict';

    var LocalStorage = {};
    LocalStorage.storage = function(Users) {
        localStorage.setItem('users',  JSON.stringify(Users));
        var store = JSON.parse(localStorage.getItem('users'));
        console.log(store);
    }

    return LocalStorage;
})();



//         if (typeof(Storage) !== "undefined") {
//
//             localStorage.setItem('users', JSON.stringify(Users));
//             var test = localStorage.getItem('users');
//             console.log(test);
//
//         } else {
//             userList.innerHTML = "Sorry, your browser does not support Web Storage...";
//         }


    // localStorage.setItem('users',  JSON.stringify(Users));
    // var store = JSON.parse(localStorage.getItem('users'));
    // console.log(store);
