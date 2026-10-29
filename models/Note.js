const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Note', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};