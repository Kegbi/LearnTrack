BEGIN TRANSACTION;

CREATE TABLE books_likes (
  bookid INTEGER references books(bookid),
  userid INTEGER references users(userid),
  typeofaction SMALLINT NOT NULL
);

COMMIT;