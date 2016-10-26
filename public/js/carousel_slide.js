$(document).ready(function() {

  var images = [{
    url: "https://energent.files.wordpress.com/2014/08/solar-panel.jpg"
  }, {
    url: "https://www.ceati.com/images/dam.jpg"
  }, {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Wolfe_island_wind_farm%2C_Kingston_Ontario_Canada_-_Laslovarga_%28157%29.JPG/1280px-Wolfe_island_wind_farm%2C_Kingston_Ontario_Canada_-_Laslovarga_%28157%29.JPG"
  }, {
    url: "http://newsactivist.com/sites/default/files/tar_sands_0.jpg"
  }, {
    url: "http://www.polarisenergy.com.my/upload/9213/images/ELECTRICITY%20POWER%20GENERATION.jpg"
  }, {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Krafla_geothermal_power_station_wiki.jpg"
  }, {
    url: "https://www.tesla.com/tesla_theme/assets/img/gigafactory/hero.jpg"
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
    interval: 3300,
    pause: "false"
  });

  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: "true",
    interval: 5500,
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