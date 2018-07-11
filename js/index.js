$(document).ready(function(){

  // animated nav icon
  $('.animated-nav-icon').click(function(){
      $(this).toggleClass('open');
  });

  // animate in the videos when the page loads
  $('.video-tile').hide().show('fast', function showNext() {
    $(this).next('div').show('fast', showNext);
  });


  //
  // project preview and screen recording
  //
  // pause the video when the modal is closed
  $(document).on('click', '.hanging-close', '.modal-backdrop, .modal', function (event) {
    // remove the src so the player itself gets removed, as this is 
    // the only reliable way to ensure the video stops playing in IE
    $('#screen-recording-video').empty();
  });
  //start playing the video whenever the trailer modal is opened
  $(document).on('click', '.video-tile', function (event) {
    var screenRecording = $(this).attr('screen-recording-id')
    var sourceUrl = './img/screen_recording/' + screenRecording + '?autoplay=1&html5=1';
    $('#screen-recording-video').empty().append($('<iframe></iframe>', {
      'id': 'screen-recording',
      'class': 'screen-recording',
      'width': '900px',
      'type': 'text-html',
      'src': sourceUrl,
      'frameborder': 0
    }));
  });


})