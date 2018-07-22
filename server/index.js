const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {db} = require('./db/index');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const PORT = 3000;

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  }
  catch (error) {
    console.log(error);
  }
}
init();

module.exports = app;

