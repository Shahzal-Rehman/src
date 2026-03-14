	// OWL SLIDER CUSTOM JS

	jQuery(document).ready(function() {
		
		
		/* ---------------------------------------------- /*
         * Home section height
         /* ---------------------------------------------- */

        function buildHomeSection(homeSection) {
            if (homeSection.length > 0) {
                if (homeSection.hasClass('home-full-height')) {
                    homeSection.height(jQuery(window).height());
                } else {
                    homeSection.height(jQuery(window).height() * 0.85);
                }
            }
        }
		
		/* ---------------------------------------------- /*
         * Header Sticky
         /* ---------------------------------------------- */
		
		jQuery(window).scroll(function(){
            if (jQuery(window).scrollTop() >= 100) {
                jQuery('.header-sticky').addClass('header-fixed-top');
				jQuery('.header-sticky').removeClass('not-sticky');
            }
            else {
                jQuery('.header-sticky').removeClass('header-fixed-top');
				jQuery('.header-sticky').addClass('not-sticky');
            }
        });
		
		/* ---------------------------------------------- /*
         * Time
        /* ---------------------------------------------- */
		
		   var myVar = setInterval(function() {
			myTimer();
		  }, 100);

		  function myTimer() {
			var d = new Date();
			document.getElementById("newsexo-time").innerHTML = d.toLocaleTimeString();
		  }
		
		/* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.page-scroll-up').fadeIn();
            } else {
                jQuery('.page-scroll-up').fadeOut();
            }
        });

        jQuery('a[href="#totop"]').click(function() {
            jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
		
		
		// Tooltip Js
		jQuery(function () {
			jQuery('[data-toggle="tooltip"]').tooltip()
		});
	
		// Accodian Js
		function toggleIcon(e) {
			jQuery(e.target)
			.prev('.panel-heading')
			.find(".more-less")
			.toggleClass('fa-plus-square-o fa-minus-square-o');
		}
		jQuery('.panel-group').on('hidden.bs.collapse', toggleIcon);
		jQuery('.panel-group').on('shown.bs.collapse', toggleIcon);
		
		
		
		//Search Popup Box
		
		jQuery(function () {
			jQuery('a[href="#search-popup"]').on('click', function(event) {
				event.preventDefault();
				jQuery('#search-popup').addClass('open');
				jQuery('#search-popup > form > input[type="search-popup"]').focus();
			});
			
			jQuery('#search-popup, #search-popup button.close').on('click keyup', function(event) {
				if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
					jQuery(this).removeClass('open');
				}
			});
		});
		
		
		//News Slider
		jQuery("#news-slider").owlCarousel({
			//navigation : true, // Show next and prev buttons	
			autoplay: true,
			autoplayTimeout: 1800,
			smartSpeed: 1200,
			autoplayHoverPause: true,
			loop:true,
			margin:0, // margin 10px till 960 breakpoint
			autoHeight: true,
			responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
			items: 1,
			dots: false,
			nav:true, // is true across all sizes
			//lazyLoad:true,
			navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"]
		});
		 
	});
	