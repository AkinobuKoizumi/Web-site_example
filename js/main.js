(function() {
  'use strict';

  var openMenu = document.getElementById('open_menu');
  var closeMenu = document.getElementById('close_menu');
  var menu = document.getElementById('menu');

  openMenu.addEventListener('click', function() {
    menu.classList.add('shown');
  });

  closeMenu.addEventListener('click', function() {
    menu.classList.remove('shown');
  });
  
})();
  

window.addEventListener('DOMContentLoaded', function(){
  /** jQueryの処理 */
  $('#back-to-top').hide();
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
  });
  $('#back-to-top a').click(function() {
      $('html, body').animate({
          scrollTop:0
      }, 500);
      return false;
  });
});  