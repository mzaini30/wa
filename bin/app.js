jQuery(function(){
	$('.convert').click(function(){
		if ($('[required]').val() == ''){
			alert('Nomor Whatsapp harus diisi.');
		} else {
			nomor_whatsapp = $('#nomor-whatsapp').val();
			isi = $('#isi-pesan').val();
			isi = isi.replace(/ /g, '%20');
			$('#hasil').val('https://api.whatsapp.com/send?phone='+nomor_whatsapp+'&text='+isi+'');
		}
	});
});