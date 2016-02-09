$(document).ready(function(){
	$('nav button.menu-burger-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
	});
});

// Below, code from code pen

  // "use strict";
  // var $nav = $('nav');
  // var $nav__main = $nav.attr('data-toggle');
  // $nav.children($nav__main).children('li').children('a').on('click',function(e) {
  //   var $this = $(this);
  //   // PREVENT
  //   e.preventDefault();
  //   // DEL ACTIVE
  //   $nav.find('.active').removeClass('active');
  //   $this.parent().addClass('active');
  // });
  //  // MENU BURGER
  // $('nav button.menu-burger-trigger').on('click',function(e){
  //   e.preventDefault();
  //   $('.container').toggleClass('right-push');;
  // });
  // // TOUCH
  // $('.touch .container__wrap').on('click',function(e){
  //   e.preventDefault();
  //   $('.container').removeClass('right-push');
  // });