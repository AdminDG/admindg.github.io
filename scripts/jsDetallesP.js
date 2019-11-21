var producto;
var url;
var codigo;

function clickaction(b) {

	// Guardar En Una Variable El Producto Seleccionado
	producto = b.id;

	// Metodo Obtener Url
	var ini = getURL();
}

function getURL() {

	// Dirección URL Inicial
	url = 'DetallesProducto.html';
	
	// Dirección URL Final
    url = url + '?' + 'codigo' + '=' + producto;	
    
    // Cambier Dirección URL Inicial Por URL Final
    return decodeURIComponent(url);
    
}

function miFuncion() {

	// Obtener Código A Partir De URL
	var urlParametro = new URLSearchParams(window.location.search);
	codigo = urlParametro.get('codigo');
	
	var Src = '../images/' + codigo + '.jpg';

	document.getElementById('DP-img').src=Src;

	if(codigo == 'T_P49') {
		document.getElementById('Descripcion').innerHTML="CHANAX POWER";
	}
	else if (codigo == 'T_Original') {

		document.getElementById('Descripcion').innerHTML="Original Trodat Printy: Con una gran variedad de tamaños de marcada, los sellos Printy destacan por su diseño y cambio de cartucho de tinta sencillo.";
		
		document.getElementById('Tamaño1').innerHTML="38 x 14mm";
		document.getElementById('Tamaño2').innerHTML="47 x 18mm";
		document.getElementById('Tamaño3').innerHTML="58 x 22mm";
		document.getElementById('Tamaño4').innerHTML="64 x 26mm";
		document.getElementById("Tamaño5").parentNode.style.display = "none";

		document.getElementById("EJ-Imagen").src= "../images/EJ_" + codigo + ".jpg";

		document.getElementById("txt_Precio").innerHTML = "Precio Desde Q1,000.00";
		
		document.getElementById("EJ-Colores").lastChild.style.backgroundColor = "black";

	}else if (codigo == 'T_P492') {

		document.getElementById('Descripcion').innerHTML="erickPOWER2";
		
		document.getElementById("txt_Precio").innerHTML = "Precio Desde Q2,000.00";
		
	}

	else if (codigo == 'T_P4916') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'T_P4917') {

		document.getElementById('Descripcion').innerHTML="erickPOWE3";
	
	}

	else if (codigo == 'F_FTC') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'F_F48') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'F_24') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'N-A57') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'N_48') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'B_PM') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}

	else if (codigo == 'S_P') {

		document.getElementById('Descripcion').innerHTML="erickPOWER";
	
	}


}


//document.getElementById('video').src=urlvideo; 
//document.getElementById('cont1').innerHTML='Introducción Al Módulo';
//alert('OK');
