const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
// const request = require('request');


//modules:
const date = require(__dirname + "/date.js")

const app = express();
const port = 3000;
// var item = "";
const items = ["Buy Food"];
const workItems = [];
// require("dotenv").config();
// //
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const day = date.getDate();
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
})

app.post('/', (req, res) => {
  // console.log(req.body);
  const item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get('/work', (req, res) => {
  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post('/work', (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.get('/about', (req, res) => {
  res.render("about");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port ${port}`)
});
