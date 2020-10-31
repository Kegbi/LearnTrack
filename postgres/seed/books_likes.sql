BEGIN TRANSACTION;

INSERT into books_likes (bookid, userid, typeofaction) values (2, 1, 'like');
INSERT into books_likes (bookid, userid, typeofaction) values (2, 2, 'dislike');

COMMIT;
