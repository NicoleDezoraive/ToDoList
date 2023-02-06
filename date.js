exports.getDate = function (){
  const today = new Date();
  const currentDay = today.getDay();
  // let day = "";
  const options = {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return today.toLocaleDateString("en-US", options);
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
}



exports.getDay = function (){
  const today = new Date();
  const currentDay = today.getDay();
  const options = {
    weekday: 'long'
  };
  return today.toLocaleDateString("en-US", options);
}
