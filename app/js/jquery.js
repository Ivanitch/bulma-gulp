$(document).ready(function() {
	// Tabs
	$('#tab_header ul li.item').on('click', function() {
		var number = $(this).data('option');
		$('#tab_header ul li.item').removeClass('is-active');
		$(this).addClass('is-active');
		$('#tab_container .container_item').removeClass('is-active');
		$('div[data-item="' + number + '"]').addClass('is-active');
	});

	// Notification
	$('.delete').each(function() {
 	$(this).on('click', function () {
 		$(this).parent().fadeOut(600);
 	});	 
 });


}); // Ready end