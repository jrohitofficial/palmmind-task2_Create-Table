$(document).ready(function() {
    var users = [
        { id: 1, name: 'Rohit Jha', email: 'jrohitofficial@gmail.com' },
        { id: 2, name: 'Palmmind', email: 'Palmmind@gmail.com' },
        { id: 3, name: 'Testrohit', email: 'rjtest1@gmail.com' }
    ];

    function populateTable() {
        var tableBody = $('#usersTable tbody');
        tableBody.empty();

        $.each(users, function(index, user) {
            var row = '<tr>' +
                        '<td>' + user.id + '</td>' +
                        '<td>' + user.name + '</td>' +
                        '<td>' + user.email + '</td>' +
                        '<td><button class="btn btn-danger btn-sm delete-user" data-id="' + user.id + '">Delete</button></td>' +
                      '</tr>';
            tableBody.append(row);
        });
    }

    function addUser(name, email) {
        var newId = users.length ? users[users.length - 1].id + 1 : 1;
        var newUser = { id: newId, name: name, email: email };
        users.push(newUser);
        populateTable();
    }

    // Initial population of the table
    populateTable();

    // Event listener for add user form
    $('#addUserForm').submit(function(event) {
        event.preventDefault();
        var userName = $('#userName').val();
        var userEmail = $('#userEmail').val();
        addUser(userName, userEmail);
        this.reset();
    });

    // Event listener for delete button
    $(document).on('click', '.delete-user', function() {
        var userId = $(this).data('id');
        users = users.filter(function(user) {
            return user.id !== userId;
        });
        populateTable();
    });
});
