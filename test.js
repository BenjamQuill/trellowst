require('dotenv').config();
const { List } = require('./app/models');

const getList = async () => {
    console.log('toutes les listes : ', List.findAll());
}

getList();