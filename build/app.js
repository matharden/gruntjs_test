/*! my-test-grunt 2013-06-18 */
// my-plugin.js

App = {
  init: function () {
    console.log('init');
  }
};
(function() {
  myFunc(function() {
    alert('Hello world');
    return console.log('something');
  });

}).call(this);
