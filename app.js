const express = require("express");
const path = require("path");
const knex = require("knex");

const DATABASE_URL = process.env.POSTGRES_URI;

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});

const app = express();

app.use(express.json({ extended: true }));

app.use("uploads", express.static(path.join(__dirname, "./uploads")));
app.use("images", express.static(path.join(__dirname, "./uploads/images")));

require("./routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));

