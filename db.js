const connect = require('./connectToDb')
const {ObjectId} = require('mongodb')
//insert polls in db
async function writeToDb(doc) {
    //access database and collection
        const client = await connect()
        const database = client.db("Projects");
        const polls = database.collection("opinion_polls");
        const result = await polls.insertOne(doc);
        return result;
}

async function deletePoll(id){
    const client = await connect()
    const query = {
        '_id': new ObjectId(`${id}`)
      }
    const database = client.db("Projects");
    const polls = database.collection("opinion_polls");
    const result = await polls.deleteOne(query)
    return result
}

async function findInDb(filter, projection = {}){
    const client = await connect()
    const database = client.db("Projects");
    const polls = database.collection("opinion_polls");
    const result = polls.find(filter, projection)
    const results = await result.toArray();
    await client.close();
    return results
}

async function updateInDb(filter, updateDoc){
    const client = await connect()
    const database = client.db("Projects");
    const polls = database.collection("opinion_polls");
    const result = await polls.updateOne(filter, updateDoc)
    return result 
}

module.exports = {writeToDb, deletePoll, findInDb, updateInDb}
