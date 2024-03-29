jQuery(function($) { 
  var $slider = $('.slider'); //
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 2000; // 4 seconds
  function slides(){
    return $slider.find($slide);
  }
  slides().fadeOut();

  // moving / active :D
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);
  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});