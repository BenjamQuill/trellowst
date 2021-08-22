const { Router } = require('express');
const router = Router();
const ListsController = require('../app/controllers/listsController');
const CardsController = require('../app/controllers/cardsControlleurs');
const TagsController = require('../app/controllers/tagsController');

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

router.get('/lists/:id/cards', CardsController.getCardsInList);
router.get('/cards/:id', CardsController.getOneCard);
router.post('/cards', CardsController.createCard);
router.patch('/cards/:id', CardsController.modifyCard);
router.put('/cards/:id?', CardsController.createOrModify);
router.delete('/cards/:id', CardsController.deleteCard);

/* Routing for tags */
router.get('/tags', TagsController.getAllTags);
router.post('/tags', TagsController.createTag);
router.patch('/tags/:id', TagsController.modifyTag);
router.put('/tags/:id?', TagsController.createOrModify);
router.delete('/tags/:id', TagsController.deleteTag);
router.post('/cards/:id/tags', TagsController.associateTagToCard);
router.delete('/cards/:cardId/tags/:tagId', TagsController.removeTagFromCard);

router.use((req, res) => {
  res.status(404).send('Service does not exists\nSee : https://doc.localhost.api');
});

module.exports = router;
    