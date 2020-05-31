import Sequelize, { Model } from 'sequelize';

class Protocol extends Model {
    static init(sequelize) {
        super.init(
            {
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
                    defaultValue: 'I',
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
            },
            { sequelize }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'created_by',
        });

        this.belongsTo(models.File, { foreignKey: 'file_id', as: 'image' });
    }
}

export default Protocol;
