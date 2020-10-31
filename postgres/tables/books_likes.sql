BEGIN TRANSACTION;

CREATE TABLE books_likes (
  bookid INTEGER references books(bookid),
  userid INTEGER references users(userid),
  typeofaction VARCHAR(10) NOT NULL
);

COMMIT;