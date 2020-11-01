BEGIN TRANSACTION;

INSERT into books_likes (bookid, userid, typeofaction) values (2, 1, 'l');
INSERT into books_likes (bookid, userid, typeofaction) values (2, 2, 'd');
INSERT into books_likes (bookid, userid, typeofaction) values (3, 2, 's');

COMMIT;
