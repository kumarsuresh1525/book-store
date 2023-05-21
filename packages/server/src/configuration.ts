import * as config from 'config';
export default {
  ...config,
  port: parseInt(config.port, 10),
  database: {
    ...config.database,
    port: parseInt(config.database.port, 10),
    uri: function () {
      return `mongodb://${this.host}:${this.port}`;
    },
  },
};
