const bcrypt = require('bcryptjs');

module.exports = {
    up: async queryInterface => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    username: 'admin',
                    name: 'Admin',
                    admin: true,
                    email: 'suporte.ti@amazonfort.com.br',
                    password_hash: await bcrypt.hash('123456', 8),
                    provider: true,
                    avatar_id: null,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('users', null, {});
    },
};
