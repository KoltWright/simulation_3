const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('build'));

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })

app.get('http://localhost3001/test',() => console.log("it works"));
const port = 3001;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
})
