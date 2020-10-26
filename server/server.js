const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const knex = require("knex");

const app = express();

const DATABASE_URL = process.env.POSTGRES_URI;
const CLIENT_URL = process.env.CLIENT_URL;

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", CLIENT_URL);
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "./uploads/images")));

require("./routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
