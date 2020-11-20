const { getIdColumnName } = require("./utils");
const { getLikesTableName } = require("./utils");

const getLatest = (db, type, quantity) => {
  return db.select("*").from(type).orderBy("created", "desc").limit(quantity);
};

const getItemInfo = (db, id, type) => {
  let id_column = getIdColumnName(type);
  return db
    .select("*")
    .from(type)
    .where({ [id_column]: id });
};

const getItemInteractions = (db, id, type, action) => {
  let table = getLikesTableName(type);
  let id_column = getIdColumnName(type);
  return db
    .count("*")
    .from(table)
    .where({ [id_column]: id, typeofaction: action });
};

const getProfileInteractions = (db, id, type, action) => {
  const table = getLikesTableName(type);
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
