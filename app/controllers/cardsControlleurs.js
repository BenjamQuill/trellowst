const Card = require('../models/Card');

const CardsController = {

    getAllCards : async (_, res) => {

        try {
            
            const cards = await Card.findAll({
                include : 'tags',
                order: [
                    ['position', 'ASC']
                ]
            });

            res.json(cards);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

};

module.exports = CardsController;