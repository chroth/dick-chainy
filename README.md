# DICK CHAINY

Warning! This is a lunch hack experiment!

Takes a library and makes it chainable, passing last return value as the first parameter into the next value.

I'm not sure what to use it for at the moment.

## Usage

```javascript
var calculator = {
  add: function(x, y) { return x + y; },
  subtract: function(x, y) { return x - y; }
};

var calcy = Dick.Chainy(calculator);
var results = calcy(30)
  .add(20)
  .subtract(9)
  .ret();

results.should.eql(59);

```
