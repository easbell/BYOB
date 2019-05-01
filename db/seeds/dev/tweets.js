const parties = require('../../politicalTweetData');

const createTweet = (knex, party) => {
  return knex('parties').insert({
    name: party.name,
    symbol: party.symbol,
    founded: party.founded
  }, 'id')
}

exports.seed = (knex, Promise) => {
  return knex('tweets').del()
    .then(() => knex('parties').del())
    .then(() => {
      let partyPromises = [];

      parties.forEach(party => {
        partyPromises.push(createTweet(knex, party));
      });

      return Promise.all(partyPromises);
    })
    .catch(error => console.log(`error seeding data: ${error}`));
}