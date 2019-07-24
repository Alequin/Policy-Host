const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const sendPrivatePolicy = policyFile => (_, res) => {
  return res.sendFile(path.join(`${__dirname}/private-policies/${policyFile}`))
}

app.get('/spin-the-bottle', sendPrivatePolicy('spin-the-bottle.html'))
app.get('/pentagram', sendPrivatePolicy('pentagram.html'))
app.get(
  '/ask-for-a-drink',
  sendPrivatePolicy('buy-drinks-in-another-language-translations.html')
)
app.get('/', (_, res) => {
  res.sendFile(path.join(`${__dirname}/home.html`))
})

app.listen(port, () => console.log(`Policy host is running on port ${port}!`))
