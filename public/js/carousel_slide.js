$(document).ready(function() {

  var baseDir = "../img/carousel/";
  var images = [{
    url: baseDir + "solar.jpg"
  }, {
    url: baseDir + "dam.jpg"
  }, {
    url: baseDir + "wolfe.jpg"
  }, {
    url: baseDir + "tar.jpg"
  }, {
    url: baseDir + "power.jpg"
  }, {
    url: baseDir + "geothermal.jpg"
  }, {
    url: baseDir + "nuclear.jpg"
  }, {
    url: baseDir + "solarfarm.jpg"
  }, {
    url: baseDir + "wind.jpg"
  }, {
    url: baseDir + "winteroil.jpg"
  }, {
    url: baseDir + "offshore.jpg"
  }];

  images.sort(function() { return 0.5 - Math.random(); });

  $.each(images, function(index, image) {
    var element = $('<div class="item"><div class="fill" style="background-image:url(' + image.url + ');"></div></div>')
  
    if (index === 0) {
      element.addClass("active");   
    }

    element.appendTo("div#head-carousel-inner");
  });

  $('#head-carousel').carousel({
    interval: 4000,
    pause: "false"
  });

  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: "true",
    interval: 6500,
  });
});

// jQuery(document).ready(function ($) {
//     var images = [{
//         url: "http://i.imgur.com/jSfZIJK.png",
//         alt: "Vale"
//     }, {
//         url: "http://i.imgur.com/z2FyBAt.png",
//         alt: "Petrobras"
//     }, {
//         url: "http://i.imgur.com/mZtv0bA.png",
//         alt: "IGAM"
//     }, {
//         url: "http://i.imgur.com/tqgQxbq.png",
//         alt: "Arcelor Mittal"
//     }];

//     // http://css-tricks.com/snippets/javascript/shuffle-array/
//     images.sort(function () { return 0.5 - Math.random(); });

//     $.each(images, function (index, image) {

//         var element = $('<div class="item"><a href="#"><img src="' + image.url + '" alt="' + image.alt + '" /></a></div>')

//         if (index === 0) {
//             element.addClass("active");   
//         }

//         element.appendTo("div.carousel-inner");
//     });

//     $('.carousel').carousel({
//       interval: 1000,
//     })
// });