const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


const categories = require('./data/course.json');

app.get('/course', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
  res.send('Course API is Running')
})

app.listen(port, () => {
  console.log('FaazizPROEd Course Site is running on port', port);
})