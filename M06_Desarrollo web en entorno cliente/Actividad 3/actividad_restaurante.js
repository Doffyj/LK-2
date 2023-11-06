//Ej 2
class Plato {
	constructor(nombre, descripcion, precio) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
	}

	getHTML() {
		return `<div class="plato"><h3>${this.nombre}</h3><p>${this.descripcion}</p><span class="precio">${this.precio}€</span></div>`;
	}
}
//Ej 3
/*
const plato1 = new Plato("Hamburguesa", "Deliciosa hamburguesa con carne jugosa y queso derretido", 10);
console.log(plato1.getHTML());
*/

//Ej 4
const menu = {
	nombre: "",
	platos: [],
	addPlato: function(plato) {
		this.platos.push(plato);
	},
	getHTML: function() {
		let menuprint = <h1>${this.nombre}</h1>
		this.platos.forEach(plato => {
			menuprint += plato.getHTML();
		});
		return html;
	}
}
//Para la comprobación del Ej 5
function Menu(nombre) {
	const inst = Object.create(menu);
	inst.nombre = nombre;
	return inst;
}

//Ej 5
/*
const menu1 = new Menu("Menú del día");
menu1.addPlato(plato1);
console.log(menu1.getHTML());
*/