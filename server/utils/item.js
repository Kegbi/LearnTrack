const { getIdColumnName } = require("./utils");
const { getTableName } = require("./utils");

const getLatest = (db, type, quantity) => {
  return db.select("*").from(type).orderBy("created", "desc").limit(quantity);
};

const getItemInfo = (db, id, type) => {
  let table = getTableName(type);
  let id_column = getIdColumnName(type);
  return db
    .select("*")
    .from(table)
    .where({ [id_column]: id });
};

const getItemInteractions = (db, id, type, action) => {
  let table = getTableName(type);
  let id_column = getIdColumnName(type);
  return db
    .count("*")
    .from(table)
    .where({ [id_column]: id, typeofaction: action });
};

const getProfileInteractions = (db, id, type, action) => {
  const table = getTableName(type);
  const id_column = getIdColumnName(type);
  return db
    .select(id_column)
    .from(table)
    .where({ userid: id, typeofaction: action });
};

module.exports = {
  getLatest,
  getItemInfo,
  getItemInteractions,
  getProfileInteractions,
};
