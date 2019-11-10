// require express
const express = require('express')
const app = express()
// port setting
const port = 3000

// require handlebars
const exphbs = require('express-handlebars')

// require bodyParser
const bodyParser = require('body-parser')

// 
const generateTrashTalk = require('./generate_trash_talk')

// handlebars semantic template
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// static files
app.use(express.static('public'))

// render page
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let options = req.body
  const trashTalk = generateTrashTalk(options)
  console.log('req.body', req.body)
  res.render('index', {trashTalk: trashTalk, options: options})
})

// listen
app.listen(port, () => {
  console.log(`zangwang is Express himself`)
})