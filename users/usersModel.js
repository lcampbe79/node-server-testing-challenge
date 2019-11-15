const db = require('../data/dbConfig');

module.exports = {
  getAllUsers,
  insert,
  remove
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

function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}
