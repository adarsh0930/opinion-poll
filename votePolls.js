const { updateInDb } = require("./db")
const {ObjectId} = require('mongodb')


const vote = async function(pollId, optionId){
    const filter = {'_id': new ObjectId(`${pollId}`), "options.id":optionId}
    const updateDoc = {
        $inc: {'options.$.vote': 1}
    }
    const poll = await updateInDb(filter, updateDoc)
    return
    
}

module.exports = vote