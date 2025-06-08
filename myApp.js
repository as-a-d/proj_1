const express = require('express')

const app = express();



// date1 = new Date().toString()

// console.log(date1)



app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000')
})

app.get("/", function(req, res)  {
  res.send("Home page")
  
})

app.get("/api/:date?", function(req, res) {
  const date = new Date(req.params.date);
  res.json({
    unix: date.getDate(),
    utc: date.toUTCString()

  });
});
