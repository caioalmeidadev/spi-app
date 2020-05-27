const bcrypt = require('bcryptjs');

module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    username: 'admin',
                    name: 'Admin',
                    isAdmin: true,
                    email: 'suporte.ti@amazonfort.com.br',
                    password_hash: bcrypt.hash('123456', 8),
                    provider: true,
                    avatar_id: null,
                    created_at: new Date(),
                    updated_at: null,
                },
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('users', null, {});
    },
};
