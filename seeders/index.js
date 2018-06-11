const { sequelize } = require('../models')

async function setupDb() {
    try {
        await sequelize.sync();
        process.exit(0)
    } catch (e) {
        process.exit(1)
    }

}

setupDb()