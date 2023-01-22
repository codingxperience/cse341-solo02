const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-control-Allow-Origin', '*');
  next();
})
app.use('/', require('./routes'));

app.post('/contact', (req, res) => {
  
})

mongodb.initDb((err, mongodb) => {
  if(err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })