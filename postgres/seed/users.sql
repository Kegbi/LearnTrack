BEGIN TRANSACTION;

INSERT into users (login, hash, admin, joined) values ('Kegbi', '123123123123', true, '2020-10-30 21:25:54.334');
INSERT into users (login, hash, admin, joined) values ('Somebody', '123123123123', true, '2020-10-30 21:35:54.334');

COMMIT;
