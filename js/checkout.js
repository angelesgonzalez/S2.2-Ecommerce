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
!5- Password needs to have at least 6 carachters + one letter & one number
!6- email needs to have email format. 
!Invalid phone number!! Must be 9 digits with no
							letters

 * Todos los campos son obligatorios.
 * Todos los campos deben tener al menos 3 caracteres.
* El nombre y los apellidos deben contener solo letras.
 * El teléfono debe contener solo números.
 * La contraseña debe incluir números y letras.
 * El email debe tener formato de correo electrónico.
 *Cuando el/la usuario/a introduzca un campo que no cumpla con las validaciones anteriores, el input debe resaltarse en rojo y mostrar un mensaje en la parte inferior.
*Ayuda: podrás colorear el borde del input en rojo y mostrar el mensaje de error manipulando el DOM, aunque también puedes usar la clase is-invalid de Bootstrap.

*/







// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "") {
		error++;
	}

	if (fEmail.value == "") {
		error++;
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}
}



/*

!firtName -> fName id="errorName"
! lastName -> id="fLastN" id="errorLastN"
!id="fEmail" id="errorEmail"
!id="fAddress"  id="errorAddress"
 !id="fPassword" id="errorPassword"
!id="fPhone" id="errorPhone" 
!<form class="form" id="checkout-form">
!id="btn" 
	



*/