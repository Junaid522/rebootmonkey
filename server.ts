import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as compression from 'compression';
import { existsSync } from 'fs';
import { join } from 'path';

import 'localstorage-polyfill';

global['localStorage'] = localStorage;

const yargs = require('yargs');

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  server.use(compression());
  const distFolder = join(process.cwd(), 'dist/reboot-monkey/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  // Parse command-line arguments
  const argv = yargs
    .option('port', {
      alias: 'p',
      description: 'Port number for the server',
      type: 'number',
      default: process.env['PORT'] || 4000,
    })
    .help()
    .alias('help', 'h').argv;
  const port = argv.port;
  // Extract the port number from the arguments

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
