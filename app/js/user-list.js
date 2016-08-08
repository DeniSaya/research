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
                '</li>'
            ].join('');
        }
        userList.innerHTML = showUsers;
    }

    return ListOfUsers;
})();
