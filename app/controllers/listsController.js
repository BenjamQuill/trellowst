const {List} = require('../models');

const ListsController = {

    getAllLists : async (_, res) => {

        try {
            const lists = await List.findAll({
                include: {
                    association: 'cards',
                    include: 'tags'
                },
                order: [
                    ['position', 'ASC'],
                    ['cards', 'position', 'ASC']
                ]
            });

            res.json(lists);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    getOneList : async (req, res) => {

        console.log(req.params.id);

        try {
            const id = req.params.id;
            const list = await List.findByPk(id, {
                include: {
                    association: 'cards',
                    include: 'tags'
                  },
                  order: [
                    ['cards', 'position', 'ASC']
                  ]
            });

            if (list) {
                res.json(list);
            } else {
                res.json('Can\'t find list with id ', id);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    createList : async (req, res) => {
        try {
            const { name, position } = req.body;
            //errors array
            const bodyErrors = [];

            // if no body's name
            if (!name) {
                bodyErrors.push('Name can not be empty');
            }

            // if error
            if (bodyErrors.length) {
                res.status(400).json(bodyErrors)
            } else {
                let newList = List.build({
                    name,
                    position
                });
                await newList.save();
                res.status(200).json(newList);
            }

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    updateList : async (req, res) => {
        try {
            const id = req.params.id;
            const list = await List.findByPk(id);

            // if list exists -> update with data
            if (list) {
                const { name, position} = req.body;

                if (name) {
                    list.name = name;
                }
                if (position) {
                    list.position = position;
                }

                await list.save();

                res.json(list);
            } else {
                res.status(400).json('Can\'t find list with id ', id);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    createOrModify: async (req, res) => {
        try {
          let list;
          if (req.params.id) {
            list = await List.findByPk(req.params.id);
          }
          if (list) {
            await ListsController.modifyList(req, res);
          } else {
            await ListsController.createList(req, res);
          }
        } catch (error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
      },

    deleteList : async (req, res) => {
        try {
            const id = req.params.id;
            const list = await List.findByPk(id);
            console.log(list);
            if (!list) {
                res.status(400).json('Can\'t find list with id ', id);
            } else {
                list.destroy();
                res.json('List deleted');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = ListsController;