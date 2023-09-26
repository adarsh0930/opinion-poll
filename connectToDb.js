const { MongoClient } = require('mongodb')

async function connect() {
  const connectionUrl = process.env.MONGO_URL;
  const client = new MongoClient(connectionUrl);
  await client.connect();
  return client;
}

module.exports = connect;