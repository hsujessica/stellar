const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {db} = require('./db/index')

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = 3000

const init = async () => {
  try {
    await db.sync({force: true});
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    })
  }
  catch (error) {
    console.log(error);
  }
}
init();

