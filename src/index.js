const express = require('express')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 80

const app = express()

app.use(cors)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`server started port: ${port}`)
  }
})
