function o() {
    this.a = 2
    this.m = function() {
      return this.a + 1
    }
  }

  p.prototype = Object.create(o.prototype);
  p.prototype.constructor = p;

  var j = new o();
  var c = new p();
  console.log(j.m()); // 3
  // When calling o.m in this case, 'this' refers to o
  
  function p() {
    o.call(this)
    this.c = 2
    this.d = function() {
      return this.c + 1
    }
  };
  // p is an object that inherits from o
  
  c.a = 4; // creates a property 'a' on p
  console.log(c.m()); // 5
  // when p.m is called, 'this' refers to p.
  // So when p inherits the function m of o, 
  // 'this.a' means p.a, the property 'a' of p
  
  console.log(j.a + "\n" + c.a)