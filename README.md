# Trellowst

## L'idée générale

* C'est un travail qui vise à "reproduire" plus simplement le travail de Trello, gestion beaucoup plus complexe de tâches.
* Une liste peut être créée, supprimée, modifiée. Et elle peut contenir 0 à plusieurs cartes.
* L'utilisateur peut créer autant de listes qu'il désire et mettre autant de cartes à l'intérieur de ces listes.
* Chaque liste dispose d'un nom.
* Chaque carte dispose d'un titre, d'une position au sein de la liste, d'une couleur (optionnelle) et d'un ou plusieurs label(s) (optionnel(s))

## Pour jouer avec l'api

* Installation des packages nécessaires à l'api
```bash
npm install
```
* Base de données et de ses tables
1. Créer une base de données avec le nom souhaité (Noter nom, pwd pour le .env)
    1. Faire sqitch deploy : `sqitch deploy db:pg:nomDb`
    2. Faire un test : `sqitch verify db:pg:nomDb`
1. Insérer des données dans la base