BEGIN TRANSACTION;

CREATE TABLE courses (
  courseid serial PRIMARY KEY,
  name VARCHAR(200) UNIQUE NOT NULL,
  author VARCHAR(50) UNIQUE NOT NULL,
  info VARCHAR(500),
  created TIMESTAMP NOT NULL
);

COMMIT;