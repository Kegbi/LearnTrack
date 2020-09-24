BEGIN TRANSACTION;

CREATE TABLE users (
  userid serial PRIMARY KEY,
  login VARCHAR(100) UNIQUE NOT NULL,
  hash varchar(100) not null,
  admin BOOLEAN NOT NULL,
  joined TIMESTAMP NOT NULL
);

COMMIT;