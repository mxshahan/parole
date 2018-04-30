import convert from 'koa-convert';
import cors from 'kcors';
import bodyParser from 'koa-body';
import session from 'koa-session';
import helmet from 'koa-helmet';
import config from 'config';
import serve from 'koa-static';
import mount from 'koa-mount';
// import serve from 'koa-static-server';

import { cModules, cMiddleware } from '../app';
import { catchErr, statusMessage } from './errorConfig';

function baseConfig(app, io) {
  app.keys = config.get('secret');
  app.proxy = true;
  // app.use(serve(config.get('paths.dist.server')));

  app.use(mount(serve(config.get('paths.dist.server'))));

  app.use(convert.compose(
    catchErr,
    cors({
      credentials: true,
      origin: true
    }),
    bodyParser({
      multipart: true,
      formLimit: config.get('file.size')
    }),
    session({
      maxAge: 21600000
    }, app),
    helmet(),
    statusMessage
  ));

  cModules(app, io);
  app.use(cMiddleware());
}

export default baseConfig;
