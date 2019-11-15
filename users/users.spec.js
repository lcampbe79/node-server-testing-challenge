const request = require("supertest");

const server = require("../api/server");

const db = require("../data/dbConfig");

const { insert, remove } = require("./usersModel");
// const {remove} = requi

describe("Users model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert user", async () => {
      await insert({ name: "Prancer" });

      const users = await db("users");

      expect(users).toHaveLength(1);
    });

    it("should insert provided user", async () => {
      await insert({ name: "Prancer" }),
        await insert({ name: "pTd" }),
        await insert({ name: "Olivia Susan" });

      const users = await db("users");

      expect(users).toHaveLength(3);
      expect(users[0].name).toBe("Prancer");
      expect(users[1].name).toBe("pTd");
      expect(users[2].name).toBe("Olivia Susan");
    });
  });
  describe('remove()', () => {

    it('should delete user', async () => {

     await remove(1)//SQL starts at 1 NOT 0

      const users = await db('users')

      expect(users).toHaveLength(2)

 
      expect(users[0].name).toBe('pTd')
      expect(users[1].name).toBe('Olivia Susan')
    })
  })
});
