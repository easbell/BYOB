const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`example app listening on ${port}`))

app.get('/api/v1/tweets', (req, res) => {
  database('tweets').select()
    .then((tweets) => {
      res.status(200).json(tweets);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});


app.get('/api/v1/footnotes', (req, res) => {
  database('footnotes').select()
    .then((footnotes) => {
      res.status(200).json(footnotes);
    })
    .catch((error) => {
      res.status(500).json({ error })
    })
});