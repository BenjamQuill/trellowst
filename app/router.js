const { Router } = require('express');
const router = Router();
const ListsController = require('../app/controllers/listsController');

/**
 * Routing for lists
 */
router.get('/lists', ListsController.getAllLists);
router.get('/lists/:id', ListsController.getOneList);
router.post('/lists', ListsController.createList);
router.patch('/lists/:id', ListsController.updateList);
router.put('/lists/:id', ListsController.createOrModify);
router.delete('/lists/:id', ListsController.deleteList);

/**
 * Routing for cards
 */
router.get('/cards', );
router.get('/cards/:id', );

module.exports = router;
    