const { sequelize } = require('./database');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Соединение установлено успешно!');
    } catch (err) {
        console.log('Не удалось установить соединение:', err);
    }
}

testConnection();