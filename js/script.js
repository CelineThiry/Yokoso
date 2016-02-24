$(document).ready(function(){
	// Menu burger animation
	$('nav button.menu-burger-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('main#base,nav#menu-push,nav.courrier-nav').toggleClass('open');

				$('main#base').click(function(e){ 
				e.preventDefault();
				$(this).removeClass('open');
				$('nav button.menu-burger-trigger,nav#menu-push,nav.courrier-nav').removeClass('open');
			});

			// 	$('nav#menu-push>ul>li>a').click(function(e){
			// 	e.preventDefault();
			// 	$('nav button.menu-burger-trigger,nav#menu-push,main#base').removeClass('open');
			// });		
	});

	//animation menu connexion pour mobile
	$('.login-and-signup-small-device').click(function(e){
		e.preventDefault();
		$('.hidden-menu-login').toggleClass('active');
		$('.hidden-menu-signup').toggleClass('active');

		$('main#base').click(function(e){ 
				e.preventDefault();				
				$('.hidden-menu-signup').removeClass('active');
				$('.hidden-menu-login').removeClass('active');
			});
			
	});

	



	//Slideshow	
	  // $('#checkbox').change(function(){
   //  setInterval(function () {
   //      moveRight();
   //  }, 3000);
  	// });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });


    //waypoints
 //    var waypoint = new Waypoint({
	//   element: document.getElementById('waypoint'),
	//   handler: function(direction) {
	//     console.log('Scrolled to waypoint!')
	//   }
	// })

	//smooth scrolling
// 	$(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

	$('a[href="#last-articles"]').on('click', function(event) {
		console.log('last-articles');
		event.preventDefault();
	    $('html, body').animate({
	    	scrollTop: $("section.line-of-article").offset().top - 76}, 1000);
});

		$('a[href="#a-propos"]').on('click', function(event) {
	
		event.preventDefault();
	    $('html, body').animate({
	    	scrollTop: $("section.a-propos").offset().top - 76}, 1000);
});

				$('a[href="#signup-section"]').on('click', function(event) {
	
		event.preventDefault();
	    $('html, body').animate({
	    	scrollTop: $("section.signup-section").offset().top - 76}, 1000);
});
	
// 	$('a[href="#"]').on('click', function(event) {
		
//     var target = $(this.href);
//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 10000);
//     }
// });
// 	$('a[href^="#"]').on('click', function(event) {
		
//     var target = $(this.href);
    
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 10000);    
// });

   

	//Search lightbox multiselect
	// $(".dropdown dt a").on('click', function() {
	//   $(".dropdown dd ul").slideToggle('fast');
	// });

	// $(".dropdown dd ul li a").on('click', function() {
	//   $(".dropdown dd ul").hide();
	// });

	// function getSelectedValue(id) {
	//   return $("#" + id).find("dt a span.value").html();
	// }

	// $(document).bind('click', function(e) {
	//   var $clicked = $(e.target);
	//   if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
	// });

	// $('.mutliSelect input[type="checkbox"]').on('click', function() {

	//   var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
	//     title = $(this).val() + ",";

	//   if ($(this).is(':checked')) {
	//     var html = '<span title="' + title + '">' + title + '</span>';
	//     $('.multiSel').append(html);
	//     $(".hida").hide();
	//   } else {
	//     $('span[title="' + title + '"]').remove();
	//     var ret = $(".hida");
	//     $('.dropdown dt a').append(ret);

	//   }
	// });

	// Animation of description profil panel
	$('.corres-header > figure.avatar').click(function(e){
				e.preventDefault();
				$('.corres-header > .contact-description').toggleClass('active');
			});	

	// Animation of the left panel button
	$('.corres-header > button.contact-panel').click(function(e){
				e.preventDefault();
				$('this').toggleClass('open');
				$('.left-panel').toggleClass('open');
				$('.list-contact-header').toggleClass('open');				
				  if ($('.right-panel').hasClass('large-9 medium-9') | $('.corres-header').hasClass('large-9 medium-9')) {
				  		$('.right-panel').removeClass('large-9 medium-9');
				  		$('.right-panel').addClass('large-12 medium-12');
				  		$('.corres-header').removeClass('large-9 medium-9');
				  		$('.corres-header').addClass('large-12 medium-12');
				  } 
				  else {
				  		$('.right-panel').removeClass('large-12 medium-12');
				  		$('.right-panel').addClass('large-9 medium-9');
				  		$('.corres-header').removeClass('large-12 medium-12');
				  		$('.corres-header').addClass('large-9 medium-9');
				  }
			});	
	//Contact panel tabs
	$('.contact-panel > li').click(function(e){
				e.preventDefault();


				var profilView = $(this).children('a').attr('href');
				$('.contact-panel > li').removeClass('active');
				$('.right-panel > .messages').removeClass('active');
				$('.corres-header').removeClass('active');
				console.log(profilView);

				$(this).addClass('active');
				$(profilView).addClass('active');
				$(profilView+'-header').addClass('active');
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
				window.scrollTo(0, 0);							 
	});	
	// ouvrir la light box du signup
	$('.signup.button').click(function(e){
				e.preventDefault();
				$('.lightbox.signup').addClass('active');	
				window.scrollTo(0, 0);						 
	});	
	// ouvrir la light box avatar
	$('#profil figure.avatar').click(function(e){
				e.preventDefault();
				$('.lightbox.avatar').addClass('active');
				window.scrollTo(0, 0);
	});	
	// Fermer la light box avatar
	$('.lightbox.avatar figure').click(function(e){
				e.preventDefault();
				$('.lightbox').removeClass('active');							 
	});	
	// ouvrir la light box du search
	$('li>a#search-button').click(function(e){
				e.preventDefault();
				$('.lightbox.search').addClass('active');
				window.scrollTo(0, 0);							 
	});
	$('.cat.search').click(function(e){
				e.preventDefault();
				$('.lightbox.search').addClass('active');
				window.scrollTo(0, 0);							 
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

	//Flexslider
	$(window).load(function() {
  		$('.flexslider').flexslider({
    		animation: "slide"
  		});
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