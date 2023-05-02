import app from './app';

const server = app.listen(app.get('port'), () => {
  console.log(`Listening at ${app.get('port')}`);
});

const shutdown = (e: string) => {
  console.log(`Caught interrupt signal (${e})`);
  server.close();
};
process.on('SIGINT', shutdown);
process.on('SIGQUIT', shutdown);
process.on('SIGTERM', shutdown);

export default server;
