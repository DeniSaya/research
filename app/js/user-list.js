var listOfUsers = (function() {
    'use strict';

    var ListOfUsers = {};
    ListOfUsers.users = function(users, userList) {
        var showUsers = "";
        for(var i = 0; i < users.length; i++) {
            showUsers += [
                '<li>',
                    '<h4>' + users[i].name + '</h4>',
                    '<input type="hidden" class="js-edited-name">',
                    '<p>' + users[i].description + '</p>',
                    '<input type="hidden" class="js-edited-description">',
                    //'<button class="save" onclick="app.saveUser(' + users[i].id + ');"> Save </button>',
                    '<button onclick="app.editUser(' + users[i].id + ');"> Edit </button>',
                    '<button onclick="app.deleteUser(' + users[i].id + ');"> Delete </button>',
                '</li>'
            ].join('');
        }
        userList.innerHTML = showUsers;
    }

    ListOfUsers.addUser = function(user) {
        user.id = Users.length + 1;
        Users.push(user);
    }

    ListOfUsers.editUser = function(id) {
        for (var i = 0; i < Users.length; i++) {
            var obj = Users[i];
            var showName = document.querySelector('.js-edited-name');
            var showDescription = document.querySelector('.js-edited-description');
            if (obj.id == id) {
                showName.type="text";
                showDescription.type="text";
            }
        }
    }

    ListOfUsers.deleteUser = function(id) {
        for (var i = 0; i < Users.length; i++) {
            var obj = Users[i];
            console.log(Users[i]);
            if (obj.id == id) {
                Users.splice(i, 1);
            }
        }
    }

    return ListOfUsers;
})();
