
var $email= $('#email_user');
var $telefono= $('#phone_user');
var $nombre= $('#name_user');
var $btnRegistro= $('#btn-register');

var cargarPagina= function(){
	$nombre.keyup(validUser);
	$email.keyup(validUser);
	$telefono.keyup(validUser);
}

function validUser(){
	if($email.val(), $telefono.val(), $nombre.val() != ""){
		if ($telefono.val().length === 10 ) {
			$btnRegistro.removeClass('disabled');
		}
	}
}

$(document).ready(cargarPagina);

