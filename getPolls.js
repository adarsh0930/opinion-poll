const {findInDb} = require('./db')
const {ObjectId} = require('mongodb')

const getPolls = async function(){
    const filter = {
        '_id': {'$gte' : new ObjectId(`650800928ffced0e8750eb50`)}
      }
    const projection = {'projection' : {'options.vote':-1}}
    result = await findInDb(filter, projection)
    return result
}

module.exports = getPolls