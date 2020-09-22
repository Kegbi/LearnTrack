BEGIN TRANSACTION;

CREATE TABLE users (
  userid serial PRIMARY KEY,
  hash varchar(100) not null,
  login VARCHAR(100) UNIQUE NOT NULL,
  admin BOOLEAN NOT NULL,
  joined TIMESTAMP NOT NULL
);

COMMIT;