const {writeToDb} = require('./db')

const createPoll = async function(data){
    let poll = {}
    poll['question'] = data.question
    poll['options'] = []
    
    const arr = data.options
    for(let i=0; i<arr.length; i++){
        let option = {}
        option['id'] = i+1;
        option['text'] = arr[i]
        option['vote'] = 0
        poll['options'].push(option)
    }
    result = writeToDb(poll)
    return result
}

module.exports = createPoll