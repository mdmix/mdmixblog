$(document).on('turbolinks:load', function() {
  var myvid = document.getElementById('home-video-left');
  myvid.playbackRate = 0.75;
  console.log(myvid.playbackRate);
  var myvid = document.getElementById('home-video-center');
  myvid.playbackRate = 1.0;
  console.log(myvid.playbackRate);
  var myvid = document.getElementById('home-video-right');
  myvid.playbackRate = 0.5;
  console.log(myvid.playbackRate);
});
