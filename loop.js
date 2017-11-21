(function(){
  'use strict';
for (var i = 1; i < 10001; i++) {
  if (i % 15 === 0) {
      document.write(i + 'FizzBuzz ')
  } else if (i % 5 === 0) {
      document.write(i + 'Buzz ')
  } else if (i % 3 === 0) {
      document.write(i + 'Fizz ')
  }
}
})();