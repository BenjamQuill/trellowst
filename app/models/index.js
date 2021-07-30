const List = require('./List');
const Card = require('./Card');
const Tag = require('./Tag');

// Asso List & Card
List.hasMany(Card, {
    as: 'cards',
    foreignKey: 'list_id'
});

Card.belongsTo(List, {
    as: 'list',
    foreignKey: 'list_id'
});

// Asso Card et Tag via table de jointure
Card.belongsToMany(Tag, {
    as: 'tags',
    through: 'card_has_tag',
    foreignKey: 'card_id',
    otherKey: 'tag_id',
    timestamps: false
});

Tag.belongsToMany(Card, {
    as: 'cards',
    through: 'card_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'card_id',
    timestamps: false
})

module.exports = {
    List,
    Card,
    Tag
}