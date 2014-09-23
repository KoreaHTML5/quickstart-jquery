'use strict';

// Update slogan text by append method
$('#slogan').append(' with jQuery').show();

// Update slogan text by chosen APIs
$('.chosen-select').chosen().change(function (q, e) {
	$('#slogan').text(e.selected);
});

// Update slogan text by input text
$('#typing').keypress('keyup', function(e){
	if (e.which === 13) {
    	$('#slogan').text(this.value);
    	this.value = '';
	}
});

// Construct input forms by iCheck
$('#icheck-input').iCheck({
  	labelHover: false,
  	cursor: true,
  	checkboxClass: 'icheckbox_minimal',
    radioClass: 'iradio_minimal',
	increaseArea: '20%' // optional
});

// Handle checked event fired
$('#icheck-input input').on('ifChecked', function(e){
  	console.log(e);
  	if (e.type === 'ifChecked') {
  		$('#slogan').text($(e.target).val());		
  	}
});