BEGIN TRANSACTION;

CREATE TABLE booksLikes (
  bookid INTEGER references books(bookid),
  userid INTEGER references users(userid),
  typeofaction SMALLINT NOT NULL
);

COMMIT;