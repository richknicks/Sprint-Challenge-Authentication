const request = require("supertest");
// const express = require('express');
const jokesRouter = require("../jokes/jokes-router");

describe("jokes-router.js", function() {
  describe("GET /", function() {
    it("should return 200 OK (async version)", async function() {
      request(jokesRouter).get("/").then(response =>{
        expect(response.status).toBe(200);
      });

      
    })
})
})
it("should return JSON", function() {
     request(jokesRouter)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  describe("jokes-router.js", function() {
    describe("POST /", function() {
      it("should return 201 OK (async version)", async function() {
        request(jokesRouter).get("/register").then(response =>{
          expect(response.status).toBe(201);
        });
  
        
      })
  })
  })
  it("should return JSON", function() {
       request(jokesRouter)
        .get("/register")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
// describe('POST /register', function() {
//     it('responds with json', function(done) {
//       request(express)
//         .post('/register')
//         .send({username: 'john', password:'pass'})
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(201)
//         .end(function(err, res) {
//           if (err) return done(err);
//           done();
//         });
//     });
//   });
    describe("jokes-router.js", function() {
        describe("POST /", function() {
          it("should return 201 OK (async version)", async function() {
            request(jokesRouter).post("/login").then(response =>{
              expect(response.status).toBe(200);
            });
      
            
          })
      })
      })
      it("should return JSON", function() {
           request(jokesRouter)
            .get("/login")
            .then(res => {
              expect(res.type).toMatch(/json/i);
            });
        });

    