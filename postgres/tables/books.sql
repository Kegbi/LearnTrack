BEGIN TRANSACTION;

CREATE TABLE books (
  bookid serial PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  image VARCHAR(50),
  author VARCHAR(50) NOT NULL,
  info VARCHAR(500),
  created TIMESTAMP NOT NULL
);

COMMIT;