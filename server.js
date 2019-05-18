'use strict';
const colors = require('colors');
const app = require('./app/app');

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => startUp());

const startUp = () => {
  // eslint-disable-next-line no-console
  console.log(colors.green(`INFO::server started on port ${PORT}`));
};

const shutDown = () => {
  // eslint-disable-next-line no-console
  console.log(colors.red('************ Shutting Down Server **************'));
};

process.once('SIGINT', shutDown);
process.once('SIGTERM', shutDown);
