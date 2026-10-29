const { sequelize } = require('./database');
const { List, Note } = require('./models');

async function runQueries() {
    try {
        console.log('--- 1. findAll(): Все заметки ---');
        const allNotes = await Note.findAll();
        console.log(JSON.stringify(allNotes, null, 2));

        console.log('\n--- 2. findByPk(): Заметка по ID (ID = 1) ---');
        const noteById = await Note.findByPk(1);
        console.log(noteById ? noteById.toJSON() : 'Не найдено');

        console.log('\n--- 3. findAll({ where: ... }): Только невыполненные заметки ---');
        const pendingNotes = await Note.findAll({
            where: { isCompleted: false },
        });
        console.log(JSON.stringify(pendingNotes, null, 2));

        console.log('\n--- 4. findAll({ include: ... }): Все списки с их заметками ---');
        const listsWithNotes = await List.findAll({
            include: [Note],
        });
        console.log(JSON.stringify(listsWithNotes, null, 2));

        console.log('\n--- 5. create(): Создание новой заметки ---');
        const newNote = await Note.create({
            title: 'Купить корм коту',
            content: 'Сухой и влажный',
            isCompleted: false,
            listId: 3, 
        });
        console.log('Создана заметка:', newNote.toJSON());

    } catch (error) {
        console.error('Ошибка выполнения запросов:', error);
    } finally {
        await sequelize.close();
    }
}

runQueries();