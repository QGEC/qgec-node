  // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  // $('.dropdown').on('show.bs.dropdown', function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  // });

  // // ADD SLIDEUP ANIMATION TO DROPDOWN //
  // $('.dropdown').on('hide.bs.dropdown', function(e){
  //   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  // });

if (screen.width > 767){
  $('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
  }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(30).slideUp()
  });
};