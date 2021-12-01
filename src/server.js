const express = require("express");
const cors = require("cors");
const database = require("./db");
require("dotenv").config();

database.sync().then(() => console.log("Banco de dados Conectado!"));

const PORT = process.env.PORT | 5000;
const routes = require("./Routes/routes");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server running in http://localhost:${PORT}`)
);
