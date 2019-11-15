
// exports.seed = function(knex) {
  
//   return knex('users').insert([
//     {name: 'Lisa'},
//     {name: 'Marc'},
//     {name: 'Noah'},
//     {name: 'Olivia'}
//   ]);

// };

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {name: 'Lisa'},
        {name: 'Marc'},
        {name: 'Noah'},
        {name: 'Olivia'}
      ]);
    });
};
