const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');
// const request = require('request');

const app = express();
const port = 3000;
// var item = "";
let items = ["Buy Food"];
// require("dotenv").config();
// //
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  let today = new Date();
  let currentDay = today.getDay();
  // let day = "";
  let options = {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let day = today.toLocaleDateString("en-US", options);
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wensday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //   console.log("Error: current day is equal to:" + currentDay);
  // }
  // if (currentDay === 6 || currentDay === 5) { //Friday or Saturday
  //   // res.send("<h1>Yat it's the weekend!</h1>");
  //   day = "weekend";
  // } else {
  //   // res.write("<p>It is not the weekend.<p>");
  //   // res.write("<h1>Boo! I have to work!<h1>");
  //   // res.send();
  //   day = "weekday";
  //   // res.sendFile(__dirname + "/index.html");
  // }

  res.render('list', {
    kindOfDay: day,
    newListItem: items
  });

})

app.post('/', (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port ${port}`)
});
