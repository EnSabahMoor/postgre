const settings = require("./settings")

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex('famous_people').insert({
  last_name: 'Domise',
  first_name: 'Andray',
  birthdate: new Date('August 26, 1980')
}).then(function(resp) {
  console.log("Deleted", resp);
}).catch(function(err) {
  console.log("error caught", err);
});
