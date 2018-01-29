jQuery(function(){
	$('.convert').click(function(){
		if ($('[required]').val() == ''){
			alert('Nomor Whatsapp harus diisi.');
		} else {
			nomor_whatsapp = $('#nomor-whatsapp').val();
			isi = $('#isi-pesan').val();
			$('#hasil').val('https://api.whatsapp.com/send?phone='+nomor_whatsapp+'&text='+isi+'');
		}
	});
});