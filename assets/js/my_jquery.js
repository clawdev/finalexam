$(document).ready(function(){
    $('button').click(function(e){
      e.preventDefault();
      var page = $(this).attr('href');
      $('body').animate({
        scrollTop: $(page).offset().top
      }, 1000, 'swing');
    });
  });
  