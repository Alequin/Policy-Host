const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3000

const PRIVATE_POLICY_DIR = path.join(`${__dirname}/private-policies`)

const sendPrivatePolicy = policyFile => (_, res) => {
  return res.sendFile(`${PRIVATE_POLICY_DIR}/${policyFile}`)
}

const policyFiles = fs.readdirSync(PRIVATE_POLICY_DIR)

policyFiles.forEach(fileName => {
  const urlToUse = '/' + fileName.replace('.html', '')
  app.get(urlToUse, sendPrivatePolicy(fileName))
})

app.get('/', (_, res) => {
  res.sendFile(path.join(`${__dirname}/home.html`))
})

app.listen(port, () => console.log(`Policy host is running on port ${port}!`))
