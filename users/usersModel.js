const db = require('../data/dbConfig');

module.exports = {
  getAllUsers,
  insert
}

function getAllUsers() {
  return db('users');
}

function insert(user) {
  return (
    db("users")
      .insert(user, "id")
      // .then(([id]) => {
      .then(ids => {
        const id = ids[0];
        // const [id] = ids;
        return db("users")
          .where({ id })
          .first();
      })
  );
}

// const db = require('../data/dbConfig.js');

// module.exports = {
//   insert,
//   update,
//   remove,
//   getAll,
//   findById,
// };



// function insert(user) {
//   return (
//     db("users")
//       .insert(user, "id")
//       // .then(([id]) => {
//       .then(ids => {
//         const id = ids[0];
//         // const [id] = ids;
//         return db("users")
//           .where({ id })
//           .first();
//       })
//   );
// }

// async function update(id, changes) {
//   return null;
// }

// function remove(id) {
//   return null;
// }

// function getAll() {
//   return db('users');
// }

// function findById(id) {
//   return null;
// }
