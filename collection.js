(function(){
  'use strict';
  var classes = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

  for (var y = 0; y < classes.length; y++) {
    for (var i = 0; i < classes.length; i++) {
      document.write('<p>' + classes[y] + classes[i] + '</p>');
    };
  };
})();