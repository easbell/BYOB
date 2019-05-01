const { parties, tweets } = require('../../politicalTweetData');

const createParty = (knex, party) => {
  return knex('parties').insert({
    name: party.name,
    symbol: party.symbol,
    founded: party.founded
  }, 'id')
    .then(partyId => {
      let tweetPromises = [];

      tweets.forEach(tweet => {
        if(tweet.party === party.name) {
          tweetPromises.push(
            createTweet(knex, {
              username: tweet.username,
              content: tweet.content,
              date_deleted: tweet.date_deleted,
              parties_id: partyId[0]
            })
          )
        }
      });

      return Promise.all(tweetPromises);
    })
};

const createTweet = (knex, tweet) => {
  return knex('tweets').insert(tweet)
}

exports.seed = (knex, Promise) => {
  return knex('tweets').del()
    .then(() => knex('parties').del())
    .then(() => {
      let partyPromises = [];

      parties.forEach(party => {
        partyPromises.push(createParty(knex, party));
      });

      return Promise.all(partyPromises);
    })
    .catch(error => console.log(`error seeding data: ${error}`));
}