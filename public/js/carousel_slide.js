// When the DOM is ready, run this function
$(document).ready(function() {
  $('#head-carousel').carousel({
    interval: 3000 //changes the speed
  })
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 5500,
  });
});