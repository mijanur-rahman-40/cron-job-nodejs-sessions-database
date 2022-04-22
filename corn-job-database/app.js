const express = require("express");
const app = express();
// implementing corn job
const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('running a task every second');
});



app.listen(5000, () => console.log("App Running on http://localhost:5000"));
