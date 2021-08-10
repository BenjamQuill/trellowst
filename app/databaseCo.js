const { Sequelize } = require('sequelize');

module.export = new Sequelize(process.env.PG_URL, {
    // define: {
    //     underscored: true,
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at',
    // },
    dialect: 'postgres'
})