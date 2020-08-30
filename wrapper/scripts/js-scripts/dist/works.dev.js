"use strict";

function findVideos() {
  var videos = document.querySelectorAll('.video');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector('.video__link');
  var media = video.querySelector('.video__link');
  var button = video.querySelector('.video__button');
  var id = parseMediaURL(media);
  video.addEventListener('click', function () {
    var iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  var regexp = /https\:\/\/ok\.ru\/video\//i;
  var url = media.getAttribute('href');
  var match = url.replace(regexp, '');
  return match;
}

function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
}

function generateURL(id) {
  var query = '?autoplay=1';
  return 'https://ok.ru/videoembed/' + id + query;
}

modalWindow(".photo", ".photo__media");
findVideos();