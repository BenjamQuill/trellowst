const { List, Card } = require('../models');

const CardsController = {
  getCardsInList: async (req, res) => {
    try {
      const listId = req.params.id;
      const cards = await Card.findAll(
        {
          where: {
            list_id: listId
          },
          include: 'tags',
          order: [
            ['position', 'ASC']
          ]
        });

      if (!cards) {
        res.status(404).json('Cant find cards with list_id ' + listId);
      } else {
        res.json(cards);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  getOneCard: async (req, res) => {
    try {
      const cardId = req.params.id;
      const card = await Card.findByPk(cardId, {
        include: 'tags',
        order: [
          ['position', 'ASC']
        ]
      });
      if (!card) {
        res.status(404).json('Cant find card with id ' + cardId);
      } else {
        res.json(card);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createCard: async (req, res) => {
    try {
      const { content, color, list_id } = req.body;

      let bodyErrors = [];
      if (!content) {
        bodyErrors.push(`content can not be empty`);
      }
      if (!list_id) {
        bodyErrors.push(`list_id can not be empty`);
      }

      if (bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newCard = Card.build({ content, list_id });
        if (color) {
          newCard.color = color;
        }
        await newCard.save();
        res.json(newCard);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  modifyCard: async (req, res) => {
    try {
      const cardId = req.params.id;
      const { content, color, list_id, position } = req.body;

      // on inclue les tags pour pouvoir les renvoyer à la fin de l'update
      let card = await Card.findByPk(cardId, {
        include: ['tags']
      });
      if (!card) {
        res.status(404).json(`Cant find card with id ${cardId}`);
      } else {
        // on ne change que les paramètres envoyés
        if (content) {
          card.content = content;
        }
        if (list_id) {
          card.list_id = list_id;
        }
        if (color) {
          card.color = color;
        }
        if (position) {
          card.position = position;
        }
        await card.save();
        res.json(card);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  createOrModify: async (req, res) => {
    try {
      let card;
      if (req.params.id) {
        card = await Card.findByPk(req.params.id);
      }
      if (card) {
        await CardsController.modifyCard(req, res);
      } else {
        await CardsController.createCard(req, res);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  deleteCard: async (req, res) => {
    try {
      const cardId = req.params.id;
      let card = await Card.findByPk(cardId);
      if (!card) {
        res.status(404).json(`Cant find card with id ${cardId}`);
      } else {
        await card.destroy();
        res.json('ok');
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  }
};


module.exports = CardsController;