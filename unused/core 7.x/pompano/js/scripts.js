(function ($) {


    $(document).ready(function(){	
	
	   jQuery('.region-main-menu .content').meanmenu({
		 meanScreenWidth: "767",
		 meanRevealPosition: "center"
	   });
	
	  // Search Focus
	    $('#search-block-form input').on('focus',function() { 
		   $(this).animate({
			  opacity: 1,
			  }, 300, function() {
			  // Animation complete.
			});
	    });
		
	    $('#search-block-form input').focusout(function() {
		   $(this).animate({
			  opacity: 0.25,
			  }, 300, function() {
			  // Animation complete.
			});
	    });
	
	  // Isotope and Infinite Scroll
	
	  var $container = $('.autopager .view-content');
	 
      $container.imagesLoaded( function(){
		$container.isotope({
		  // options
		  itemSelector : '.views-row',
		  layoutMode : 'fitRows'
		});		
	  });
		
	  $container.infinitescroll({
	 
		navSelector  : "ul.pager",            
		nextSelector : "ul.pager .pager-next a",    
		itemSelector : ".autopager .view-content .views-row",
        debug        : false,
        animate      : false,
        loading: {
            finished: function() {},
            finishedMsg: "<p>No More to Load!</p>",
            msg: null,
            msgText: "<p>Loading</p>",
            selector: null,
            speed: 'fast',
            start: undefined
        },
		state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false, // For when it goes all the way through the archive.
            isPaused: false,
            currPage: 0
        },	
		bufferPx: 40			
		},  
		function(newElements) {
		  var $newElems = $(newElements);
		  $newElems.imagesLoaded(function(){
			$container.isotope('appended', $newElems );
		  });
		} 	
	  );	
	  
	// Portfolio Grid 
	
	var $pompano_container = $('.view-pompano-portfolio .view-content');
   
	$pompano_container.imagesLoaded( function(){
	  $pompano_container.isotope({
		// options
		itemSelector : '.views-row',
		layoutMode : 'fitRows'
	  });		
	});
	
    // Fixed Header
	  
	  var HeaderTop = $('.header-wrapper.fixed').offset().top;
	  
	  var windowsize = $(window).width();
  
	  $(window).resize(function() {
		var windowsize = $(window).width();
	  });	
	  
	  if(windowsize > 700) {
	
	  $(window).scroll(function(){
		   
		if( $(window).scrollTop() > HeaderTop ) {
			$('.fixed').css({position: 'fixed', top: '0px'});
			$('.fixed').css({'box-shadow' : '0 0 10px #000'});
			$('body').css({'margin-top' : '85px'});
  
		} else {
					
			$('body').css({'margin-top' : '0px'});
			$('.fixed').css({position: 'static'});
		}
	 
	  });	
	  
	  }	
	

	// Slideshow Responsiveness Fix
	
	  $(window).bind('resize', function() {
		$('.views-slideshow-cycle-main-frame').height(
		  $('.views-slideshow-cycle-main-frame').children().height()
		);
	  });	  
	  	 
    }); 

 	Drupal.behaviors.bonesSuperfish = {
	
	  attach: function(context, settings) {
			  
	  $('#main-menu ul.menu', context).superfish({
		  delay: 400,											    
		  animation: {opacity:'show'},
		  speed: 200,
		  autoArrows: false,
		  dropShadows: false /* Needed for IE */
	  });
		  
	  }
    }	
	
		
})(jQuery);  