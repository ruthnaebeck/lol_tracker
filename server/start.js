'use strict';

const path = require('path');
const express = require('express');
const {resolve} = require('path');
const pkg = require('../package.json');
const app = express();

const env = process.env;
const cPort = env.PORT || 3000;

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/api', require('./api'))
  .use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  })
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

const server = app.listen(cPort, () => {
  const { address, port } = server.address();
  const host = address === '::' ? 'localhost' : address;
  const urlSafeHost = host.includes(':') ? `[${host}]` : host;
  console.log(`${pkg.name} running at: http://${urlSafeHost}:${port}`);
});
