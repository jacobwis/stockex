const express = require('express');
const fs = require('fs');
const api = require('./api');

const app = express();

api.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PROD = NODE_ENV === 'production';

if (IS_PROD) {
  app.use(express.static('build'));
  app.use(express.static('assets'));

  app.get('*', (req, res) => {
    fs.readFile('./build/index.html', 'utf8', (err, data) => {
      res.send(data);
    });
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
