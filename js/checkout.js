/* Hasta este ejercicio solo hemos implementado la lógica de la pantalla principal de la tienda. Ahora implementaremos la validación del formulario de checkout que se encuentra en el archivo checkout.js.

Para acceder a esta pantalla, debes hacer clic en el icono del carrito en la parte superior derecha de la pantalla, apareciendo un modal con el botón que te llevará a dicha pantalla.
 Tu primer objetivo será validar el formulario checkout.html 
utilizando el archivo checkout.js.
En este ejercicio deberás implementar la lógica para que los campos del formulario cumplan las siguientes condiciones:


!1- Cargar el form id = checkout-form
add eventlistener onchange 
!2- add eventlistener to the form
!2- if(at least one is not filled) - return
!3- if (at least one of the inputs don't have 3 caracters ) - return
!4- validationName - LastName -> only letters
!5- Password needs to have at least 4 carachters + one letter & one number
!6- email needs to have email format. 
!Invalid phone number!! Must be 9 digits with no
!when input is invalid, add is-invalid class to the element 
!password (4-8 characters)"


							

 * Todos los campos son obligatorios.
 * Todos los campos deben tener al menos 3 caracteres.
* El nombre y los apellidos deben contener solo letras.
 * El teléfono debe contener solo números.
 * La contraseña debe incluir números y letras.
 * El email debe tener formato de correo electrónico.
 *Cuando el/la usuario/a introduzca un campo que no cumpla con las validaciones anteriores, el input debe resaltarse en rojo y mostrar un mensaje en la parte inferior.
*Ayuda: podrás colorear el borde del input en rojo y mostrar el mensaje de error manipulando el DOM, aunque también puedes usar la clase is-invalid de Bootstrap.

1- required already in html
2- every input needs to check that is not null === '' 
3- Name & LastName only letters, not null




*/

document.addEventListener("DOMContentLoaded", (event) => {
	const inputs = document.querySelectorAll("input");

	inputs.forEach((input) => {
		input.addEventListener("change", (event) => {
			validateField(event.target);
		});
	});
});

const validateField = (element) => {
	const error = getValidations(element);

	if (error) {
		showError(element, error);
	} else {
		element.classList.remove("is-invalid");
	}
};

const getValidations = (element) => {
	const value = element.value.trim();

	let errorMessage = "";

	if (value === "" || value.length < 3) {
		return (errorMessage = `Please insert at least 3 characters.`);
	}

	if (element.id === "fLastN" || element.id === "fName") {
		if (!hasOnlyLetters(value)) {
			return (errorMessage = `Please use letters only. Numbers and special characters are not allowed.`);
		}
	}

	if (element.id === "fEmail") {
		if (!isValidEmail(value)) {
			return (errorMessage = `Please enter a valid email address. Example: name@example.com`);
		}
	}

	if (element.id === "fPassword") {
		if (value.length < 4) {
			return (errorMessage = `Password needs to be at least 4 characters long.`);
		}

		if (!isValidPassword(value)) {
			return (errorMessage = `Password needs to include at least one letter and one number.`);
		}
	}

	return errorMessage;
};

const hasOnlyLetters = (string) => {
	const regex = /^[A-Za-z]+$/;
	return regex.test(string);
};

const isValidEmail = (email) => {
	const regex =
		/^(?!\.)(?!.*\.\.)[a-zA-Z0-9._%+-]+(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
};

const isValidPassword = (password) => {
	const hasLetter = /[A-Za-z]/.test(password);
	const hasNumber = /\d/.test(password);

	return hasLetter && hasNumber;
};

const showError = (element, error) => {
	const errorDiv = element.nextElementSibling;
	errorDiv.textContent = error;
	element.classList.add("is-invalid");
};

