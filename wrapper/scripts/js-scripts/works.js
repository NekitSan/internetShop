function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__link');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https\:\/\/ok\.ru\/video\//i;
    let url = media.getAttribute('href');
    let match = url.replace(regexp, '');

    return match;
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?autoplay=1';

    return 'https://ok.ru/videoembed/' + id + query;
}

modalWindow(".photo", ".photo__media");
findVideos();