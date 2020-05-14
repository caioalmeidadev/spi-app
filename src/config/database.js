require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PWRD,
    database: process.env.DB_NAME,
    define: {
        timestamp: false,
        underscored: true,
        underscoredAll: true,
    },
};
