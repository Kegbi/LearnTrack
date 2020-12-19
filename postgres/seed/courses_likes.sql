BEGIN TRANSACTION;

INSERT into courses_likes (courseid, userid, typeofaction) values (2, 1, 'l');
INSERT into courses_likes (courseid, userid, typeofaction) values (2, 2, 'd');
INSERT into courses_likes (courseid, userid, typeofaction) values (3, 2, 's');

COMMIT;