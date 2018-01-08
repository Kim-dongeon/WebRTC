'use strict';

//navigator.getUserMedia = navigator.getUserMedia ||
  //  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: true
};

var video = document.querySelector('video');

function successCallback(stream) {
  var videoTracks = stream.getVideoTracks();
  var audioTracks = stream.getAudioTracks();
  window.stream=stream;
  video.srcObject = stream;
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

var promise = navigator.mediaDevices.getUserMedia(constraints);
promise.then(successCallback,errorCallback);
