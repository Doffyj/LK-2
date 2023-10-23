function crearCookie(cnombre, cvalue, cduracion){
	const d = new Date();
	d.setTime(d.getTime() + (cduracion*24*60*60*1000));
	let expira = "expires=" + d.toUTCString();
	document.cookie = cnombre + "=" + cvalue + ";" + expira + ";path=/";
}