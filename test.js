require('dotenv').config();
const { List } = require('./app/models');

const getList = async () => {
    console.log('je suis dans le getlist');
    const listes = await List.findAll();
    console.log('toutes les listes : ', listes);
}

getList();