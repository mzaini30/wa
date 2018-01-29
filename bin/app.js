jQuery(function(){
	$('.convert').click(function(){
		nomor_whatsapp = $('#nomor-whatsapp').val();
		$('#hasil').val('https://api.whatsapp.com/send?phone='+nomor_whatsapp+'&text='+isi+'');
	});
});