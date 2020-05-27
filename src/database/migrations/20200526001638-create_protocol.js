module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('protocols', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            from: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            to: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'G',
            },
            delivery_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            departue_date: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('protocols');
    },
};
