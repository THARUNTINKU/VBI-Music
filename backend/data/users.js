const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('admin12345', 10),
        isAdmin: true,
    },
    {
        name: 'User 1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('12345', 10),
    },
];

module.exports = users;
