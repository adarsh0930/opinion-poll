const { findInDb } = require("./db")
const {ObjectId} = require('mongodb')

const currentResult = async function(pollId){
    const filter = {'_id': new ObjectId(`${pollId}`)}
    const projection = {'options.id':1,'options.vote':1}
    const poll = await findInDb(filter, {projection})

    return poll
}

module.exports = currentResult