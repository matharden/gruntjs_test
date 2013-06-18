(function() {
  myFunc(function() {
    alert('Hello world');
    return console.log('something');
  });

}).call(this);
