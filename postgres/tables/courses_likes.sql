BEGIN TRANSACTION;

CREATE TABLE courses_likes (
  courseid INTEGER references courses(courseid),
  userid INTEGER references users(userid),
  typeofaction SMALLINT NOT NULL
);

COMMIT;