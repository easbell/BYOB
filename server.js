const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express();
app.set('port', process.env.PORT || 3000)
app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log(`example app listening on port.`))

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

// DELETE tweet
app.delete('/api/v1/tweets/:id', (req, res) => {
  database('tweets').where('id', req.params.id).del()
    .then(tweet => {
      if (tweet.length) {
        res.status(200).send('Tweet was deleted.')
      } else {
        res.status(404).json({
          error: `Could not find tweet with id ${req.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

// POST to add a political party
app.post('/api/v1/parties', (req, res) => {
  const party = req.body;

  for (let requiredParameter of ['name', 'symbol', 'founded']) {
    if (!party[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, symbol: <Symbol>, founded: <String>}. You're missing a ${requiredParameter} property.`});
    }
  }

  database('parties').insert(party, 'id')
    .then(party => {
      res.status(201).json({ id: party[0] })
    })
    .catch(error => {
      res.status(500).json({ error });
    });
})

// POST to add a tweet
app.post('/api/v1/parties/:id/tweets', (req, res) => {
  const tweet = req.body;
  const partyId = req.params.id;

  for (let requiredParameter of ['username', 'content', 'date_deleted']) {
    if (!tweet[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { username: <String>, content: <Symbol>, date_deleted: <String>}. You're missing a ${requiredParameter} property.`})
    }
  }

  database('tweets').insert({...tweet, parties_id: partyId}, 'id')
    .then(tweet => {
      res.status(201).json({ tweet })
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})