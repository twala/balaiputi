$('#body-wrapper').imagesLoaded()

	.always( function( instance ) {
		console.log('all images loaded');
		
		setTimeout( function(){ $('body').addClass('loaded'); }, 1500);
	});