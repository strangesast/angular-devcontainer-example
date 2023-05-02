import express from 'express';
import config from 'config';
import { default as knexConfig } from 'knex';

const app = express();

const knex = knexConfig({
  client: 'mssql',
  connection: config.get('db'),
});

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  res.on('finish', function () {
    console.log(
      req.method,
      decodeURI(req.url),
      res.statusCode,
      res.statusMessage
    );
  });
  next();
});

app.get('/api/', async (req, res) => {
  const results = await knex.raw(`select @@servername as servername`);
  const { servername } = results[0];
  res.json({ servername });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    _: express.NextFunction // eslint-disable-line
  ) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }
);

export default app;
