var mainModule = (function () {

  var _ = {};

  _.openPhotoSwipe = function (galleryObj) {
    return function () {
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var options = {
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
      };
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryObj.items, galleryObj.options ? galleryObj.options : options);
      gallery.init();
    }
  };

  _.init = function () {
    // PhotoSwipe
    var elements = document.getElementsByClassName('view-gallery');

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', _.openPhotoSwipe(galleries[elements[i].getAttribute('data-gallery')]));
    }

    // Swiper
    if (document.getElementsByClassName('swiper-container')[0]) {
      new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        effect: 'fade',
        fade: {
          crossFade: true
        }
      });
    }
  };

  return _;

})();

window.onload = mainModule.init;
