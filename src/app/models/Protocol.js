import Sequelize, { Model } from 'sequelize';

class Protocol extends Model {
    static init(sequelize) {
        super.init({}, { sequelize });
    }
}

export default Protocol;
