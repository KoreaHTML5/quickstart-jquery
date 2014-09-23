// Update slogan text by append method
$('#slogan').append(' with jQuery').show();

// Update slogan text by chosen APIs
$('.chosen-select').chosen().change(function (q, e) {
	$('#slogan').text(e.selected);
});

// Update slogan text by input text
$('#typing').keypress('keyup', function(e){
	if (e.which == 13) {
    	$('#slogan').text(this.value);
    	this.value = '';
	}
});