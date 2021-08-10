-- Verify trellowst:data on pg

BEGIN;

SELECT * FROM "list";

SELECT * FROM "tag";

ROLLBACK;
