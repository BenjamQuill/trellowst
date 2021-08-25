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
    * Créer une base de données avec le nom souhaité (Noter nom, pwd pour le .env)
    * Faire sqitch deploy : `sqitch deploy db:pg:nomDb`
    * Faire un test : `sqitch verify db:pg:nomDb`
    * Seeding (non obligatoire) : insérer des données dans la base
* .ENV à créer avec l'exemple `env.example`
* Lancer le serveur dans un terminal (à la racine du projet)
```bash
node index.js
```
* Lancer un navigateur via le fichier `/front/index.html`

> Il faut avoir une connexion à notre base qui fonctionne
> Il faut que l'api soit lancée sur le bon PORT
> Il faut que le serveur soit lancé avant le navigateur pour éviter les erreurs liées à la connexion database