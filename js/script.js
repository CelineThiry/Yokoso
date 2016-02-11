$(document).ready(function(){
	// Menu burger animation
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

	// Animation of description profil panel
	$('#base > header > section > div > section > header > h2').click(function(e){
				e.preventDefault();
				$('main#base>header.second-nav section div section.read-letter section.contact-description').toggleClass('open');
			});	

	// Animation of the left panel button
	$('#base > header > section > div > section > header > button').click(function(e){
				e.preventDefault();
				$('this').toggleClass('open');
				$('#base > header > section > aside').toggleClass('open');
				  if ($('#base > header > section > div').hasClass('large-9 medium-9')) {
				  		$('#base > header > section > div').removeClass('large-9 medium-9');
				  		$('#base > header > section > div').addClass('large-12 medium-12');
				  } 
				  else {
				  		$('#base > header > section > div').removeClass('large-12 medium-12');
				  		$('#base > header > section > div').addClass('large-9 medium-9');
				  }
			});	
	//Contact panel tabs
	$('#base > header > section > aside > ul > li').click(function(e){
				e.preventDefault();


				var profilView = $(this).children('a').attr('href');
				$('#base > header > section > aside > ul > li').removeClass('active');
				$('#base > header > section > div.right-panel > section.read-letter').removeClass('active');
				console.log(profilView);

				$(this).addClass('active');
				$(profilView).addClass('active');
				// en mode actif la page de lettre change z-index				 
	});	

	// Message accordion
	$('.letter-accordion li').click(function(e) {
  				// e.preventDefault();
  				// $(this).siblings('div.letter-inner').addClass('active');
  				// $(this).removeClass('active');

  				// $('.letter-accordion li div.letter-preview').addClass('active');
  				// $('.letter-accordion li div.letter-inner').removeClass('active');  	

  			// 	$('.toggle').click(function(e) {
					//   	e.preventDefault();
					  
					//     var $this = $(this);
					  
					//     if ($this.next().hasClass('show')) {
					//         $this.next().removeClass('show');
					//         $this.next().slideUp(350);
					//     } else {
					//         $this.parent().parent().find('li .inner').removeClass('show');
					//         $this.parent().parent().find('li .inner').slideUp(350);
					//         $this.next().toggleClass('show');
					//         $this.next().slideToggle(350);
					//     }
					// });

  				if ($(this).children('div.letter-preview').hasClass('active') | !$(this).	children('div.letter-inner').hasClass('active')) {
  						console.log($(this));
  						$(this).children('div.letter-preview').removeClass('active');
  						$(this).children('div.letter-inner').addClass('active');
  						$('div.letter-inner.active').removeClass('active');
  						$('div.letter-preview').addClass('active');

  				} 

  				if (!$(this).children('div.letter-preview').hasClass('active') | $(this).	children('div.letter-inner').hasClass('active')) {
  						
  						$('div.letter-preview').addClass('active');
  						$(this).children('div.letter-preview').removeClass('active');
  				} 
  				
	});

	//Lightbox
	// ouvrir la light box du login
	$('.login.button').click(function(e){
				e.preventDefault();
				$('.lightbox.login').addClass('active');							 
	});	
	// Fermer n'importe quelle lightbox en cliquant sur la croix
	$('button.close').click(function(e){
				e.preventDefault();
				$('.lightbox').removeClass('active');							 
	});	
	// $('.lightbox').click(function(e){
	// 			e.preventDefault();
	// 			$('.lightbox').removeClass('active');							 
	// });	


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