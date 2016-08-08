var listOfUsers = (function() {
    'use strict';

    var ListOfUsers = {};
    ListOfUsers.users = function(users) {
        var showUsers = "";
        var i;
        for(i = 0; i <= users.length; i++) {
            showUsers = users[i].name + '' + users[i].description;
        }
        userList.innerHTML = showUsers;
        console.log(showUsers);
    }


})
