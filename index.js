const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const categories = require('./data/course.json');

app.get('/course', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
  res.send('Course API is Running')
})

app.get('/course/:id', (req,res) => {
  const id = req.params.id;
  const singleCourse = categories.find(sc => sc.id == id)
  res.send(singleCourse)
})

app.get('/enroll/:id', (req,res) => {
  const id = req.params.id;
  const enrollCourse = categories.find(sc => sc.id == id)
  res.send(enrollCourse)
})


app.listen(port, () => {
  console.log('FaazizPROEd Course Site is running on port', port);
})