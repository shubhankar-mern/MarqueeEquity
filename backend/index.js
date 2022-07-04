require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 5000 || process.env.PORT;
const cors = require('cors');
const Router = require('./routes/index');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.use(
  cors({
    origin: 'http://localhost:3000',

    credentials: true,
  })
);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on ${port}`);
  }
});
