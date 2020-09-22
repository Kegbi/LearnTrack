BEGIN TRANSACTION;

CREATE TABLE courseLikes (
  courseid INTEGER references courses(courseid),
  userid INTEGER references users(userid),
  typeofaction SMALLINT NOT NULL
);

COMMIT;