$(document).ready(function(){
	$('nav button.menu-burger-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('main#base,nav#menu-push').toggleClass('open');

				$('main#base').click(function(e){ 
				e.preventDefault();
				$(this).removeClass('open');
				$('nav button.menu-burger-trigger,nav#menu-push').removeClass('open');
			});

				$('nav#menu-push>ul>li>a').click(function(e){
				e.preventDefault();
				$('nav button.menu-burger-trigger,nav#menu-push,main#base').removeClass('open');
			});		
	});

	$('#base > header > section > section > header > h2').click(function(e){
				e.preventDefault();
				$('main#base>header.second-nav section section.read-letter section.contact-description').toggleClass('open');
			});	

	
	$('#base > header > section > section > header > button').click(function(e){
				e.preventDefault();
				$('this').toggleClass('open');
				$('#base > header > section > aside').toggleClass('open');
				  if ($('#base > header > section > section').hasClass('large-9 medium-9')) {
				  		$('#base > header > section > section').removeClass('large-9 medium-9');
				  		$('#base > header > section > section').addClass('large-12 medium-12');
				  } 
				  else {
				  		$('#base > header > section > section').removeClass('large-12 medium-12');
				  		$('#base > header > section > section').addClass('large-9 medium-9');
				  }

				



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