(function(){
  'use strict';
  var age = 15;
  var isFemale = false;
  var result = null;
  if (age <= 15) {
      result = 800;
  } else if (isFemale) {
      result = 1000;
    } else {
      result = 1800;
  }
  document.write(result);
})();
