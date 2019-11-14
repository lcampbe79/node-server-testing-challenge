const request = require('supertest');

const server = require('./server');

it('has process.env.DB_ENV as testing', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('server', () => {
  
  describe('GET /', () => {

    it('should return 200 ok', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200)
        })
    })

    it('should return JSON formatted code', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })

    it('should return the API property is showing inside the body', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({api: 'Last Daily API'})
          expect(res.body.api).toBe('Last Daily API')
        })
    })

  })
  
})