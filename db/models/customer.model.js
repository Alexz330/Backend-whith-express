const {Model,DataTypes, Sequelize} = require('sequelize');

const CUSTOMER_TABLE = 'customers';

const custumerSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    }
};