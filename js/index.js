$(document).ready(function() {
    new WOW().init();



$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

  $('ul.nav li .dropdownMobile').click(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });


  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 80) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 79) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
    
    

  
});