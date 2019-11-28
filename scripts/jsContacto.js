

	function miFuncion() {

			document.getElementById("LetraMensaje").value = "";
		}
		window.onload=miFuncion;

function sendEmail() {

	var name = document.forms["miformulario"]["NombreMensaje"].value;
	var email = document.forms["miformulario"]["EmailMensaje"].value;
	var message = document.getElementById("LetraMensaje").value;
	var subject = document.forms["miformulario"]["AsuntoMensaje"].value;
	var messageFinal =  name + " ["+ email + "]:"+ " " + message; 

	Email.send({
	Host: "smtp.gmail.com",
	Username : "serverproservi@gmail.com",
	Password : "Server1AdminProservi",
	To : 'erickestrada@deltagweb.com',
	From : email,
	Subject : subject,
	Body : messageFinal,
	}).then(
		message => alert("mail sent successfully")
	);
}


function validateForm() {

 

var name = document.forms["miformulario"]["NombreMensaje"].value,
	email = document.forms["miformulario"]["EmailMensaje"].value;

 var message = document.getElementById("LetraMensaje").value;

if (name == "" || email == "" || message == "") {

	alert("Faltan algunos datos");
	
} else {

	sendEmail()

}

}
