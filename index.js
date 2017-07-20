$(document).ready(function() {
  $('.container').css('background-color', 'black');
  $('.container').css('overflow', 'hidden');
  
  $('.row').hide();
  $('.container').append('<h2 class="screensaver">What took you so long? I had to turn on my screen saver! Touch the screen to view my portfolio!</h2>');
  $('.container').append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
 
  
  $('.container').click(function() {
     $('.row').fadeIn(400);
     $('i').remove();
     $('.screensaver').remove();
     $('.container').css('overflow','scroll');
     $('.container').css('background-image','url(https://image.ibb.co/bwhBFQ/backg.png)').css('background-size', 'cover');
    
  });
  
  
  
  
                  
                  });