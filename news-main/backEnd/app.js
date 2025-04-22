const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000


app.use(cors({
  origin: 'https://5173-idx-swen-1745306017722.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev',

  credentials: true
}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/headlines', async (req, res) => {
  const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bfdb9b5ca33d4acb88103d5f95c0386c')
  const json = await data.json()
  res.json(json)
})


app.get('/everything', async (req, res) => {
  const data = await fetch(`https://newsapi.org/v2/everything?apiKey=bfdb9b5ca33d4acb88103d5f95c0386c&q=${req.query.q}`)
  const json = await data.json()
  res.json(json)
})

app.get('/search', async (req, res) => {
  const data = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${req.query.q}`)
  const json = await data.json()
  res.json(json)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(port, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});


//   https://5000-idx-swen-1745306017722.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/