 /* eslint no-console: "off" */

const fs = require('fs');
const path = require('path');

const Collider = require('collider-core');
const express = require('express');
const Promise = require('bluebird');

const resolve = p => path.resolve(__dirname, p);
const isProd = process.env.NODE_ENV === 'production';

const server = express();
const docs = new Collider({
  path: __dirname,
  publicPath: '/docs/',
  templates: resolve('templates/'),
});

function init(results) {
  results.forEach((stats) => {
    if (stats && stats.errors && stats.warnings) {
      if (stats.errors.length > 0) stats.errors.forEach(err => console.error(err));
      if (stats.warnings.length > 0) stats.warnings.forEach(warning => console.warn(warning));
    }
  });

  server.listen(8080, () => console.log('Server started at localhost:8080.'));
}

function parseIndex(template) {
  const contentMarker = '<!-- COLLIDERHTML -->';
  const i = template.indexOf(contentMarker);
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length),
  };
}

const indexHtml = parseIndex(fs.readFileSync(resolve('./index.html'), 'utf-8'));

if (isProd) {
  Promise.all([
    docs.compileServer(),
    docs.compileClient(),
  ])
    .then(init)
    .catch(err => console.error(err));
} else {
  Promise.all([
    docs.dumpEslintrc(resolve('../')),
    docs.compileServer(true),
    docs.compileClient(server),
  ])
    .then(init)
    .catch(err => console.error(err));
}

server.use('/docs', express.static(__dirname));

// Catch all routes.
server.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  docs.render('Index', {})
    .then((result) => {
      res.write(indexHtml.head);
      res.write(result.html);
      res.write(`<script>window.__INITIAL_STATE__=${result.initialState};</script>`);
      res.end(indexHtml.tail);
    })
    .catch(err => console.error(err));
});
