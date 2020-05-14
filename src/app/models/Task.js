import Sequelize, { Model } from 'sequelize';

class Task extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                project_id: Sequelize.INTEGER,

                terminated: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                cancelled: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static isFinished() {
        return this.terminated;
    }

    static isCancelled() {
        return this.cancelled;
    }

    static associate(models) {
        this.belongsTo(models.Project, {
            foreignKey: 'project_id',
            as: 'project',
        });

        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'owner',
        });

        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'provider',
        });
    }
}

export default Task;
