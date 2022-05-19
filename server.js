const express = require("express");
const app = express();
const Budget = require("./models/budget");
const bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));



app.get("/budgets", (req, res) => {
    res.render("index.ejs", {Budget : Budget})
});

app.get("/budgets/:index", (req, res) => {
    res.render('show.ejs',  {Budget: Budget[req.params.index]})
});

app.get("/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/budgets", (req, res) => {

    Budget.push(req.body)
    res.redirect('/budgets')
});

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
