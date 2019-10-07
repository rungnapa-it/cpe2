const express = require('express')
const app = express()
const port = 10641

app.get('/', (req, res) =>
  res.send('Greetings from rungnapa...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
