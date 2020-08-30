"use strict";

$(".photo").on("click", function () {
  var url = $(this).children(".photo__media").attr("src");
  var alt = $(this).children(".photo__media").attr("alt");
  $("#modal__image").attr("src", url);
  $("#modal__image").attr("alt", alt);
  $("#modal").show();
});
$(".work__item-modal_exit").on("click", function () {
  $("#modal").hide();
  $("#modal__image").attr("src", "");
  $("#modal__image").attr("alt", "Здесь будет выбранное изображения");
});

function findVideos() {
  var videos = document.querySelectorAll('.video');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
    console.log(videos[i]);
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
  var regexp = /https\:\/\/ok\.ru\/video\//g;
  var url = media.getAttribute('href');
  var match = url.search(regexp);
  console.log(url);
  console.log(match);
  return match[1];
}

function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
}

function generateURL(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://ok.ru/video/' + id + query;
}

findVideos();