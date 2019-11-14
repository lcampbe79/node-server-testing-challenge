const db = require('../data/dbConfig');

const {insert} = require('./usersModel');

describe('Users model', () => {

  describe('insert()', () => {
    
    beforeEach(async () => {
      await db('users').truncate()
    })

    it('should insert user', async () => {
      await insert({name: 'Prancer'})

      const users = await db('users')

      expect(users).toHaveLength(1)
    })
  })

})  