import mongoose from 'mongoose';
import configuration from './configuration';

let connection;
export default async function (options = {}) {
  const dbOptions = Object.assign({}, configuration.database.options, options);
  if (!connection) {
    connection = await mongoose.connect(
      configuration.database.uri(),
      dbOptions,
    );
  }
  return connection;
}
