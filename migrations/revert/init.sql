-- Revert trellowst:init from pg

BEGIN;

-- Suppresion des tables 'si elles existent"
DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

COMMIT;
