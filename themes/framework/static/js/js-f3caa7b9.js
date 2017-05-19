// add event listener on load
    window.addEventListener('load', function() {

      // scroll into view
      document.querySelector('.js-scroll-down-to-form').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.form').scrollIntoView({ behavior: 'smooth' });
      });

      // scroll into view
      document.querySelector('.js-scroll-up-to-form').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.form').scrollIntoView({ behavior: 'smooth' });
      });
    });


    (function () {

      var bv = new Bideo();
      bv.init({
        // Video element
        videoEl: document.querySelector('#background_video'),

        // Container element
        container: document.querySelector('#container'),

        // Resize
        resize: true,

        // autoplay: false,

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        // Array of objects containing the src and type
        // of different video formats to add
        src: [
          {
            src: '/assets/Arial-Surf-Air.mp4',
            type: 'video/mp4'
          },
          {
            src: '/assets/Arial-Surf-Air.webm',
            type: 'video/webm;codecs="vp8, vorbis"'
          }
        ],

        // What to do once video loads (initial frame)
        onLoad: function () {
          document.querySelector('#video_cover').style.display = 'none';
        }
      });
    }());
