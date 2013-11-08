/* 
 * =============================================================
 * v.awesome
 * =============================================================
 */

$(function(){

/* 
 * =============================================================
 * IE FIXES
 * =============================================================
 */

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
	function getInternetExplorerVersion() {
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re	= new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) {
				rv = parseFloat( RegExp.$1 );
			}
		}
		return rv;
	}
	//Sample Check Version Function
	function checkVersion() {
		var msg = "You're not using Internet Explorer.";
		var ver = getInternetExplorerVersion();
		if ( ver > -1 ) {
			if ( ver >= 8.0 ) {
				msg = "You're using a recent copy of Internet Explorer."
			}
			else {
				msg = "You should upgrade your copy of Internet Explorer.";
			}
		}
		console.log( msg );
	}

	//checkVersion();

	$('.row-fluid').each(function(){
		$(this).find("[class*=\"span\"]:last-child").addClass('l');
	});
	

/* 
 * =============================================================
 * Some Vars
 * =============================================================
 */

	//Window Width
	$winWidth = $(window).width();
	//iPad Check
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	var ieVer = getInternetExplorerVersion();


/* 
 * =============================================================
 * BTN PULL DOWN
 * =============================================================
 */
	$('.btn-set-dropdown .drop').click(function(e){
		var $this = $(this);
		$this.closest('.btn-set-dropdown').find('ul').toggle();
		e.preventDefault();
	});
	
/* 
 * =============================================================
 * iDevices touch wipe
 * =============================================================
 */
	
	var ieVer = getInternetExplorerVersion();
	if(ieVer == -1) {
		// iDevice
		$("body").touchwipe({
			wipeLeft: function(e) {
				console.log("wipe left");
				e.preventDefault();
			},
			wipeRight: function(e) {
				console.log("wipe right");
				e.preventDefault();
			},
			wipeUp: function() {
				
			},
			wipeDown: function() {
	
			}
	
		});
	}
	
	
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Mobile Nav Slide Toggle
 * =============================================================
 */
	
	$('.mobile-icon').on('click', function() {
		$('.nav-bottom').slideToggle();
	});
	
	
	
	
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Home Slideshow
 * =============================================================
 */
	$('.flexslider').flexslider({
		
		animation: "slide",
		slideshowSpeed: 3000,
		directionNav: false,
		//start: function(slider) {
		//	$('.flexslider li.flex-active-slide .span5').prependTo('.flexslider li.flex-active-slide');
		//}
	});
	
	
	//if ($(window).width() < 960) {
	//	$('.flexslider li.flex-active-slide .span5').prependTo('.flexslider li.flex-active-slide');
	//}
	
	//before: function(slider) {
	//	if ($(window).width() < 960) {
	//		$('.flexslider li.flex-active-slide .span5').prependTo('.flexslider li.flex-active-slide');
	//	}
	//}
	
	
	
	
	
	
	    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	
	
	
	
	
	
	
	
	
	
	
	
	
}); //end ready function
