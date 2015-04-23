var should = require("should");
var Dick = require("../index");

describe("Dick.Chainy", function() {

  it("should take a library and make it chain", function(done) {
    // Set up "library"
    var calculator = {
      add: function(x, y) { return x + y; },
      goFish: function() { this.fish = 'cod'; },
      subtract: function(x, y) { return x - y; }
    };

    // Get library
    var calcy = Dick.Chainy(calculator);

    var calcyObject = calcy(27)
      .add(23)
      .goFish()
      .subtract(8);

    var calcyObject2 = calcy(1000)
      .add(11);

    calcyObject.ret().should.be.exactly(42);
    calcyObject2.ret().should.be.exactly(1011);

    done();
  });

});
