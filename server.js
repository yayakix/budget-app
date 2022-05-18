const express = require("express");
const app = express();
const Budget = require("./models/budget");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


app.get("/budgets", (req, res) => {
    res.render("index.ejs", {Budget : Budget})
});

app.get("/budgets/:index", (req, res) => {
    res.render('show.ejs',  {Budget: Budget[req.params.index]})
});

app.get("/budgets/new", (req, res) => {});

app.post("/budgets", (req, res) => {});

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
