//Ejercicio 1
//cnombre -> username, cvalue ->tipo de usuario (user), cduracion -> duracion en dias que pasaremos a ms
function crearCookie(cnombre, cvalue, cduracion){
	const d = new Date();
	d.setTime(d.getTime() + (cduracion*24*60*60*1000));
	let expira = "expires=" + d.toUTCString();
	document.cookie = cnombre + "=" + cvalue + ";" + expira + ";path=/";
}

//Ejercicio 2
crearCookie("Juan", user, 7);

//Ejercicio 3

function abrirNuevaVentana(vurl, vname){
	window.open(vurl, vname);
}