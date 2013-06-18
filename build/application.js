(function() {
  matsFunc(function() {
    console.log('Hey!');
    return console.log("Hey!");
  });

}).call(this);
