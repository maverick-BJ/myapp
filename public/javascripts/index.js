
$(function () {
	console.log("111");
	$('#myButton').on('click', function () {
		console.log('asdfdsafdsafads');
		var $btn = $(this).button('loading');
		// business logic...ff
		$btn.button('reset')
	});
});


