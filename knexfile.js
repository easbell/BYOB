// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/deletedTweets',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }

};
