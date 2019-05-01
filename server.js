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

app.get('/api/v1/parties', (req, res) => {
  database('parties').select()
    .then((parties) => {
      res.status(200).json(parties);
    })
    .catch((error) => {
      res.status(500).json({ error })
    })
});

// GET specific party
app.get('/api/v1/parties/:id', (req, res) => {
  database('parties').where('id', req.params.id).select()
    .then(party => {
      if (party.length) {
        res.status(200).json(party);
      } else {
        res.status(404).json({ 
          error: `Could not find party with id ${req.params.id}`
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// GET tweets for a party
app.get('/api/v1/parties/:id/tweets', (req, res) => {
  database('tweets').where('parties_id', req.params.id).select()
    .then(tweet => {
      if (tweet.length) {
        res.status(200).json(tweet);
      } else {
        res.status(404).json({ 
          error: `Could not find tweet with id ${req.params.id}`
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});