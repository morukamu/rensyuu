(function(){
  'use strict';
  var myBirthTime = new Date(1979, 8, 31, 12, 30);
  function updateParagraph(){
      var now = new Date();
      var seconds = (now.getTime() - myBirthTime.getTime()) / (1000 * 24 * 60 * 60);
      document.getElementById('birth-time').innerText = '生まれてから' + seconds + '日経過。';
  }
  setInterval(updateParagraph, 50);
})();