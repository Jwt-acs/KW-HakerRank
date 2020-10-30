var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8081");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
    //calling ADD api
    server
    .post('/sendMessage')
    .send({
        "4" : {
             "type": "sms",
             "from" : "TTTTTT",
             "msg" : "hi am MMMMMMMMMMMMMMMM",
             "to" : "student",
             "id": 32421412
         }
      })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
        should.exist(res.body);
      res.body.should.be.a('array');
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(30);
      done();
  });
});

});