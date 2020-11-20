const getTableName = (type) => {
  return type === "books" ? "books_likes" : "courses_likes";
};

const getIdColumnName = (type) => {
  return type === "books" ? "bookid" : "courseid";
};

module.exports = {
  getTableName,
  getIdColumnName,
};
