var listOfUsers = (function() {
    'use strict';

    var ListOfUsers = {};
    ListOfUsers.users = function(users, userList) {
        var showUsers = "";
        for(var i = 0; i < users.length; i++) {
            showUsers += [
                '<li>',
                    '<h4>' + users[i].name + '</h4>',
                    '<p>' + users[i].description + '</p>',
                    '<button class="js-save" style="display: none" onclick="app.saveChanges(' + users[i].id + ');"> Save </button>',
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

    ListOfUsers.editUser = function(id, nameField, descriptionField) {
        for (var i = 0; i < Users.length; i++) {
            var obj = Users[i];
            var save = document.querySelector('.js-save');
            if (obj.id == id) {
                nameField.value = obj.name;
                descriptionField.value = obj.description;
                save.style.display = "inline-block";
            }
        }
    }

    ListOfUsers.updateUser = function(id, userData) {
        for (var i = 0; i < Users.length; i++) {
            if (Users[i].id == id) {
                Users[i].name = userData.name;
                Users[i].description = userData.description;
            }
        }
    }

    ListOfUsers.deleteUser = function(id) {
        for (var i = 0; i < Users.length; i++) {
            var obj = Users[i];
            if (obj.id == id) {
                Users.splice(i, 1);
            }
        }
    }

    return ListOfUsers;
})();
