const express = require("express");
const app = express();
const Budget = require("./models/budget");
const bodyParser = require("body-parser");
let bankAccount = 0

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


app.get("/budgets/new", (req, res) => {
  res.render("new.ejs");
});
app.get("/budgets", (req, res) => {
    bankAccount = 0
     for (let i = 0; i < Budget.length; i++) {
       bankAccount += Number(Budget[i].amount);
     } 
   
    res.render("index.ejs", { Budget: Budget, bankAccount: bankAccount });
});

app.get("/budgets/:index", (req, res) => {
    res.render('show.ejs',  {Budget: Budget[req.params.index]})
});

app.post("/budgets", (req, res) => {
   
if(req.body.name){
 Budget.push(req.body);
}
    res.redirect('/budgets')
});

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
