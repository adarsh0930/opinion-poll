const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const createPoll = require('./createPoll')
const {deletePoll} = require('./db')
const getPolls = require('./getPolls')
const vote = require('./votePolls')
const currentResult = require('./pollsResult')



const app = express()
app.use(express.json())

app.get('/polls', async (req, res)=>{
    res.send(await getPolls())
})

app.post('/polls', async (req, res)=>{
    const poll = req.body
    const result = await createPoll(poll)
    res.send(result.insertedId)
})

app.delete('/polls/:id', async (req, res)=>{
    const pollId = req.params.id
    const result = await deletePoll(pollId)
    res.send(`Document deleted.`)
})

app.patch('/polls/:vote', async (req,res)=> {
    const pollId = req.params.vote
    const optionId = req.body.option
    const result = await vote(pollId, optionId)
    res.send("Vote Completed!")
})

app.get('/polls/:id', async (req, res)=>{
    const pollId = req.params.id
    const pollResult = await currentResult(pollId)
    res.send(pollResult)
})

app.get('/health', (req, res) => {
    res.send("I am awake at port 8000")
})

app.listen(8000, () => {
    console.log("Listening at port 8000")
})