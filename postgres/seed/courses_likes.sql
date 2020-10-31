BEGIN TRANSACTION;

INSERT into courses_likes (courseid, userid, typeofaction) values (2, 1, 'like');
INSERT into courses_likes (courseid, userid, typeofaction) values (2, 2, 'dislike');

COMMIT;