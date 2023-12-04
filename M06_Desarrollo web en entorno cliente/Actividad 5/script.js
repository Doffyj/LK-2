
function validarFormulario(nombreClienteInput, tipoClaseInput) {
	const regexLetras = /^[a-zA-Z\s]+$/;
	const nombreClienteValido = regexLetras.test(nombreClienteInput.value.trim());
	const tipoClaseValido = regexLetras.test(tipoClaseInput.value.trim());

	if (!nombreClienteValido) {
		alert("Por favor, ingresa un nombre de cliente válido (solo letras).");
		return false;
	}

	if (!tipoClaseValido) {
		alert("Por favor, ingresa un nombre de clase válido (solo letras).");
		return false;
	}

	return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const nombreClienteInput = document.getElementById("nombreCliente");
    const tipoClaseInput = document.getElementById("tipoClase");
    const formulario = document.getElementById("reservaForm");
    
    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario(nombreClienteInput, tipoClaseInput)) {
            event.preventDefault();
        }
    });
});
