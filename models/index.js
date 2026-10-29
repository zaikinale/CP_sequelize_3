const {sequelize} = require('../database')

const List = require('./List')(sequelize);
const Note = require('./Note')(sequelize);

List.hasMany(Note, { foreignKey: 'listId', onDelete: 'CASCADE' });
Note.belongsTo(List, { foreignKey: 'listId' });

module.exports = {
    List,
    Note,
};