// require express
const express = require('express')
const app = express()
// port setting
const port = 3000

// require handlebars
const exphbs = require('express-handlebars')

// handlebars semantic template
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// static files
app.use(express.static('public'))

// render page
app.get('/', (req, res) => {
  res.render('index')
})

// listen
app.listen(port, () => {
  console.log(`zangwang is Express himself`)
})