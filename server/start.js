'use strict';

const express = require('express');
const {resolve} = require('path');
const path = require('path');

const pkg = require('../package.json');

const app = express();

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/api', require('./api'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

if (module === require.main) {
  const server = app.listen(
    process.env.PORT || 3000,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`);
      console.log(`Listening on ${JSON.stringify(server.address())}`);
    }
  );
}
