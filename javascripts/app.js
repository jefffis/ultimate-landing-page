$(function(){
	var $form = $('#form');
	var $form_init = $('.form-init');
	var $input_1 = $('#input_1');
	var $submit = $('#submit');
	$form_init.on('click',function(){
		var $this = $(this);
		$form.addClass('visible');
		$input_1.focus();
	});
	$submit.on('click',function(){
		return false;
	})
});