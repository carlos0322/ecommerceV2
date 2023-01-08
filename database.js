const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const pool = mysql.createConnection({
  host: "ecommercev2.cmoxg5oqr5dn.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Password123",
  database: "ecommerce",
});

// pool.query(`select * from products`, (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });

const handleQueryResult = (err, results, res) => {
  if (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
  if (results.length === 0) {
    return res.status(404).send("No results found");
  }
  res.status(200).send(results);
};
pool.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to server");
  }
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Products", (req, res) => {
  const sql = "SELECT * FROM products";
  pool.query(sql, (err, results) => {
    res.send(results);
  });
});
app.get("/Products/HightoLow", (req, res) => {
  const sql = "SELECT * FROM products ORDER BY price DESC";
  pool.query(sql, (err, results) => {
    res.send(results);
  });
});

app.get("/Products/LowtoHigh", (req, res) => {
  const sql = "SELECT * FROM products ORDER BY price ASC";
  pool.query(sql, (err, results) => {
    res.send(results);
  });
});

app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
