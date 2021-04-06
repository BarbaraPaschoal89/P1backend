const Sequelize = require('sequelize');
 
const sequelize = require('../database/database.js');
 
const Produtos = sequelize.define("produtos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    preco: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    quantemEstoque: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1,999999]
        }
    },
});
 
module.exports = Produtos;
