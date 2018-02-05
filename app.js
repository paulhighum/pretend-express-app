const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")

app.use(bodyParser.json())


app.get("/migration", (req, res) => {
  queries
    .list("migration")
    .then(person => {
      res.json({ person })
    })
    .catch(console.error)
})

app.post("/migration", (req, res) => {
  queries
    .create("migration", req.body)
    .then(person => {
      res.status(201).json({ person: person })
    })
    .catch(console.error)
})

app.use((request, response) => {
  response.sendStatus(404)
})

module.exports = app
