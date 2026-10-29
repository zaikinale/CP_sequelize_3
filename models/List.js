const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('List', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};