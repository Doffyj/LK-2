let arraynums=[1,2,3,4,5];

for (i = 0; i < arraynums.length; i++)
	console.log(arraynums[i]);

function factorial(n){
	let fac = 1;
	if (n == 0 | n == 1)
		return fac;
	else if (n > 1){
		let j = 1;
		while (j <= n){
			fac *= j;
			j++;
		}
		return fac;
	}
	else{
		return 0;
	}
}


var usuario_edad = prompt("Introduce la edad del usuario: ");
if (parseInt(usuario_edad) >= 18){
	alert("El usuario es mayor de edad.");
} else {
	alert("El usuario es menor de edad");
}
//Igual podria usar ternarios para el mayor/menor? Revisar en el futuro
