// assets/js/gallery.js
$(function() {
	// For #main or other container
	$('#main a.image').poptrox({
	  overlayColor: '#000000',
	  overlayOpacity: 0.7,
	  caption: function($a) {
		// Grab text from sibling <h2> or similar
		return $a.parent().find('h2').text();
	  },
	  /* more poptrox settings if desired */
	});
  });
  