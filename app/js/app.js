var app = (function() {
    'use strict';

    var App = {};
    var userList = document.querySelector('.js-user-list');
    var username = document.querySelector('.username');
    var description = document.querySelector('.description');

    App.users = function() {
        listOfUsers.users(Users, userList);
    }

    App.addUser = function() {
        var user = {
            name: username.value,
            description: description.value
        };
        listOfUsers.addUser(user);
        App.users();
        App.storage();
    }

    App.deleteUser = function(id) {
        listOfUsers.deleteUser(id);
        App.users();
    }

    App.editUser = function(id) {
        listOfUsers.editUser(id, username, description);
    }

    App.storage = function() {
        store.storage(Users);
    }

    App.saveChanges = function(id) {
        var user = {
            name: username.value,
            description: description.value
        };
        listOfUsers.updateUser(id, user);
        App.users();
        username.value = '';
        description.value = '';
    }

    App.users();
    return App;
})();
