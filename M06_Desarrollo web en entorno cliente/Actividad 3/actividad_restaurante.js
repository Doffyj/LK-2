//Ej 2
class Plato {
	constructor(nombre, descripcion, precio) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
	}

	getHTML() {
		return `<div class="plato"><h3>${this.nombre}</h3><p>${this.descripcion}</p><span class="precio">${this.precio}\u20ac</span></div>`;
	}
}
//Ej 3

const plato1 = new Plato("Hamburguesa", "Deliciosa hamburguesa con carne jugosa y queso derretido", 10);
//console.log(plato1.getHTML());


//Ej 4
const menu = {
	nombre: "",
	platos: [],
	addPlato: function(plato) {
		this.platos.push(plato);
	},
	getHTML: function() {
		let menuprint = `<h1>${this.nombre}</h1>`
		this.platos.forEach(plato => {
			menuprint += plato.getHTML();
		});
		return menuprint;
	}
}
//Para la comprobación del Ej 5
function Menu(nombre) {
	const inst = Object.create(menu);
	inst.nombre = nombre;
	return inst;
}

//Ej 5

const menu1 = new Menu("Menu del dia");
menu1.addPlato(plato1);
//console.log(menu1.getHTML());


//Ej 6

var platosDisponibles = new Array();

const plato2 = new Plato("Spaguettis a la carbonara", "Yemas de huevos, queso (Pecorino Romano), guanciale y pimienta negra", 8);

platosDisponibles.push(plato1);
platosDisponibles.push(plato2);

//Ej7

function mostrarPlatos() {
	const menuContainer = document.getElementById("platos-container");
	menuContainer.innerHTML = "<h2>Platos disponibles</h2>";

	platosDisponibles.forEach(plato => {
	  const platoHTML = plato.getHTML();
	  menuContainer.innerHTML += platoHTML;
	});
}

document.addEventListener("DOMContentLoaded", mostrarPlatos);

//Ej8

let menusDisponibles = {};

menusDisponibles[menu1.nombre] = menu1;

//Ej9

function mostrarMenus() {
	const menuContainer = document.getElementById("menus-container");
	menuContainer.innerHTML = "<h2>Menus disponibles</h2>";

	for (const nombreDelMenu in menusDisponibles) {
		if (menusDisponibles.hasOwnProperty(nombreDelMenu)) {
		  const menu = menusDisponibles[nombreDelMenu];
		  const menuHTML = menu.getHTML();
		  menuContainer.innerHTML += menuHTML;
		}
	}
}

document.addEventListener("DOMContentLoaded", mostrarMenus);