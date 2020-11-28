const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const utils = require('./screenshot')

app.get('/', async (req, res) => {
  options = {
    width: parseInt(req.query.width),
    height: parseInt(req.query.height),
    landscape: !!parseInt(req.query.landscape),
    fullPage: !!parseInt(req.query.full_page)
  }

  try {
    img = await utils.screenshot(req.query.url, options)

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    })
  
    res.end(img)
  } catch {
    res.status(500).send('Something broke!')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
