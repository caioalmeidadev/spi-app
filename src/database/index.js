import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import Protocol from '../app/models/Protocol';
import User from '../app/models/User';
import File from '../app/models/File';
import databaseConfig from '../config/database';

const models = [User, Protocol, File];

class Database {
    constructor() {
        this.init();
        // this.mongo();
    }

    init() {
        this.database();
    }

    database() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }

    mongo() {
        this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useFindAndModify: true,
        });
    }
}

export default new Database();
