/**
 * Creates a function that returns Y scroll position in the browser.
 * @returns {Function} Function that returns the pixels the page has scrolled
 * along the Y-axis of the browser.
 */
var getScrollY = (function( undefined ){
	switch ( false ) {
		case window.pageYOffset == undefined:
			return function(){
				return window.pageYOffset;
			};

		case document.documentElement == undefined:
			return function(){
				return document.documentElement.scrollTop;
			};

		case document.body.parentNode == undefined:
			return function(){
				return document.body.parentNode.scrollTop;
			};

		default:
			return function(){
				return document.body.scrollTop;
			};
	}// /switch()

}());