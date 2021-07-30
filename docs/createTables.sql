-- Début d'une transaction afin de s'assurer de la cohérence gloabale de la BDD
BEGIN;

-- Suppresion des tables 'si elles existent"
DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

/* Première table : List */

CREATE TABLE "list" (
  -- Utilisation du nouveau type qui est un standart SQL alors que SERIAL est un pseudo-type de PG
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL DEFAULT '',
  "position" INTEGER NOT NULL DEFAULT 0,
  -- pour avoir la date et l'heure on utilise le type "timestamp", et pour être le plus précis possible on utilisera plutôt le type "timestampz" qui contient en plus de la date et de l'heure le fuseau horaire défini dans les locales du serveur
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);


/* 2ème table : Card */

CREATE TABLE "card" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL DEFAULT '',
  "color" TEXT NOT NULL DEFAULT '#FFF' ,
  -- si l'on veut pouvoir supprimer une liste qui contient des cartes, on est obligé de rajouter "ON DELETE CASCADE" qui aura pour conséquence de supprimer toutes les cartes qui font référence à la liste
  "list_id" INTEGER NOT NULL REFERENCES list("id") ON DELETE CASCADE,
  "position" INTEGER NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

/* 3ème table : Tag */

CREATE TABLE "tag" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL DEFAULT '',
  "color" TEXT NOT NULL DEFAULT '#FFF' ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

/* Table de liaison ! */

CREATE TABLE "card_has_tag" (
  -- si l'on veut pouvoir supprimer une carte ou un tag, on est obligé de rajouter "ON DELETE CASCADE" qui aura pour conséquence de supprimer les associations qui font référence a la carte ou le tag supprimé.
  "card_id" INTEGER NOT NULL REFERENCES card("id") ON DELETE CASCADE,
  "tag_id" INTEGER NOT NULL REFERENCES tag("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
  -- ici pas d'updated_at car une relation ne se met pas à jour, soit on l'ajoute soit on la supprime
);

COMMIT;
