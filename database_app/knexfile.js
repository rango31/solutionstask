module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "petshop",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './migrations'
    },
  },  
  staging: {
    client: 'mssql',
    connection: {
      server : 'localhost',
      user : 'sa',
      password : 'password',
      database : 'petshop',
      options: {
        port: 57071
      }
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './migrations'
    },
  },
};
