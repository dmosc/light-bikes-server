import {Signale} from 'signale';

const mongoDB = new Signale({
  interactive: true,
  scope: 'db',
  config: {
    displayTimestamp: true,
    displayDate: true,
  },
});

const api = new Signale({
  scope: 'api',
  config: {
    displayTimestamp: true,
    displayDate: true,
  },
});

export {mongoDB, api};
