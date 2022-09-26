const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    // client: 'postgres',
    // connection: {
    //   host: env('DATABASE_HOST'),
    //   port: env.int('DATABASE_PORT'),
    //   user: env('DATABASE_USERNAME'),
    //   password: env('DATABASE_PASSWORD'),
    //   database: env('DATABASE_NAME'),
    //   schema: env('DATABASE_SCHEMA'),
    // },
    useNullAsDefault: true,
  },
});
