BEGIN TRANSACTION;

CREATE TABLE books (
  bookid serial PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  image VARCHAR(50),
  type VARCHAR(10),
  author VARCHAR(100) NOT NULL,
  info VARCHAR(1000),
  created TIMESTAMP NOT NULL
);

COMMIT;