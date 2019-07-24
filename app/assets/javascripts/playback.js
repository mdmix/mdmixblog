$(document).ready(function(){
  var myvidA = document.getElementById('home-video-left');
  myvidA.playbackRate = 0.75;
  console.log(myvidA.playbackRate);
  var myvidB = document.getElementById('home-video-center');
  myvidB.playbackRate = 1.0;
  console.log(myvidB.playbackRate);
  var myvidC = document.getElementById('home-video-right');
  myvidC.playbackRate = 0.5;
  console.log(myvidC.playbackRate);
});
