function agregarAlumno() {
	console.log("boton pulsado");
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var curso = document.getElementById("curso").value;

	if (!nombre || !edad || !curso) {
		console.log("Error al insertar");
		return;
	}

	var listItem = document.createElement("li");
	listItem.textContent = nombre + ", edad: " + edad + " años, Curso: " + curso;

	var listaAlumnos = document.getElementById("lista-alumnos");

	listaAlumnos.appendChild(listItem);
}

var btnAgregarAlumno = document.getElementById("btnAgregarAlumno");
btnAgregarAlumno.addEventListener("click", agregarAlumno);


function eliminarAlumno() {
	var listItem = document.querySelector("#lista-alumnos li");
	if (listItem) {
		listItem.remove();
	}
}

var btnEliminarAlumno = document.getElementById("btnEliminarAlumno");
btnEliminarAlumno.addEventListener("click", eliminarAlumno);

function navegarElementos() {
	var listaAlumnos = document.getElementById("lista-alumnos");
	var elementos = listaAlumnos.getElementsByTagName("li");
	var currentIndex = 0;

	function siguienteElemento() {
		if (currentIndex < elementos.length - 1) {
			elementos[currentIndex].style.color = "";
			currentIndex++;
			elementos[currentIndex].style.color = "red";
		}
	}

	function anteriorElemento() {
		if (currentIndex > 0) {
			elementos[currentIndex].style.color = "";
			currentIndex--;
			elementos[currentIndex].style.color = "red";
		}
	}

	var btnSiguienteElemento = document.getElementById("siguiente-elemento");
	btnSiguienteElemento.addEventListener("click", siguienteElemento);

	var btnAnteriorElemento = document.getElementById("anterior-elemento");
	btnAnteriorElemento.addEventListener("click", anteriorElemento);
}

navegarElementos();
