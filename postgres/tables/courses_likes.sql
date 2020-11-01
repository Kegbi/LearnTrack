BEGIN TRANSACTION;

CREATE TABLE courses_likes (
  courseid INTEGER references courses(courseid),
  userid INTEGER references users(userid),
  typeofaction VARCHAR(1) NOT NULL
);

COMMIT;