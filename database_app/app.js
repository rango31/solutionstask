const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig['development']);

knex.migrate.latest()
  .then(() => {
    console.log('Database migrations ran successfull!!y');
    process.exit()
  }).catch((ex)=> {
    console.log(ex);
  })