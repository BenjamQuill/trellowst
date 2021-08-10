-- Revert trellowst:data from pg

BEGIN;

DELETE FROM "list";
DELETE FROM "card";
DELETE FROM "tag";
DELETE FROM "card_has_tag";

COMMIT;
