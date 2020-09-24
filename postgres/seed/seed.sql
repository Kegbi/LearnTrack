BEGIN TRANSACTION;

INSERT into users (login, hash, admin, joined) values ('Kegbi', 'asdasdasdasdasdas', true, '2020-02-02');

COMMIT;