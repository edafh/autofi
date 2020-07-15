const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const should = chai.should()
chai.use(chaiHttp)

describe("Posts API", function(){
  describe ("Get posts'", function(){
    it("shoul contain 100 posts", (done) => {
      chai.request(server)
        .get("/posts")
        .end((err,res)=>{
          res.body.length.should.equal(100)
          done()
      })
    })
  })
})
