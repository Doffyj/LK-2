//Punto 1
//cnombre -> username, cvalue ->tipo de usuario (user), cduracion -> duracion en dias que pasaremos a ms
function crearCookie(cnombre, cvalue, cduracion){
	const d = new Date();
	d.setTime(d.getTime() + (cduracion*24*60*60*1000));
	let expira = "expires=" + d.toUTCString();
	document.cookie = cnombre + "=" + cvalue + ";" + expira + ";path=/";
}

//Punto 2
crearCookie("Juan", user, 7);

//Punto 3

function abrirNuevaVentana(vurl, vname){
	const w = window.open(vurl, vname, "scrollbars=yes,width=500");
}

//Punto 4
abrirNuevaVentana("https://www.google.es", "x");

//Punto 5

function obtenerParametrosUrl(){
	const locstr = window.location.search;
	console.log(locstr);
}