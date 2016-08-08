var app = (function() {
    'use strict';

    var App = {};
    var userList = document.querySelector(".js-user-list");
    App.users = function() {
        listOfUsers.users(users, userList);
    }
    App.users();
    return App;
})();
