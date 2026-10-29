const { List, Note } = require('./models');
const {sequelize} = require('./database')

async function seed() {
    try {
        await sequelize.sync({ force: true });
        console.log('Таблицы успешно синхронизированы.');

        const lists = await List.bulkCreate([
            { title: 'Работа' },
            { title: 'Личное' },
            { title: 'Покупки' },
        ]);

        await Note.bulkCreate([
            {
                title: 'Подготовить отчет',
                content: 'Собрать статистику за 3-й квартал',
                isCompleted: false,
                listId: lists[0].id,
            },
            {
                title: 'Отправить договор',
                content: 'Подписать и отправить юристам',
                isCompleted: true,
                listId: lists[0].id,
            },
            {
                title: 'Записаться к врачу',
                content: 'Терапевт, вторник 15:00',
                isCompleted: false,
                listId: lists[1].id,
            },
            {
                title: 'Купить молоко и хлеб',
                content: 'Взять безлактозное молоко',
                isCompleted: false,
                listId: lists[2].id,
            },
            {
                title: 'Оплатить интернет',
                content: 'Тариф до 1-го числа',
                isCompleted: true,
                listId: lists[1].id,
            },
        ]);

        console.log('Тестовые данные успешно добавлены!');
    } catch (error) {
        console.error('Ошибка заполнения базы:', error);
    } finally {
        await sequelize.close();
    }
}

seed();