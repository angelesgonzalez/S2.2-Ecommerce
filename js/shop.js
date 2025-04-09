import { products } from "./dummyData.js";

const cart = [];

let total = 0;

// Exercise 1
window.buy = function (id) {
	const addProduct = (id) => {
		const product = products.find((element) => element.id === id);
		if (product)
			cart.push({
				...product,
				quantity: 1,
				getSubtotal: function () {
					return this.price * this.quantity;
				},
			});
	};

	const existingCartItem = cart.find((element) => element.id === id);
	existingCartItem ? existingCartItem.quantity++ : addProduct(id);

	calculateSubtotals();
	calculateTotal();
};

// Exercise 2
const cleanHTML = (id, update) => {
	const htmlElement = document.getElementById(`${id}`);
	if (htmlElement) htmlElement.innerHTML = update;
};

window.cleanCart = function () {
	cart.length = 0;
	cleanHTML("cart_list", "");
	cleanHTML("total_price", 0);
};

// Exercise 3
function calculateTotal() {
	for (let i = 0; i < cart.length; i++) {
		total += cart[i].subTotal;
	}
	return total;
}

// Exercise 4
function calculateSubtotals() {
	cart.forEach((element) => {
		const subTotal = element.getSubtotal();
		if (element.offer && element.quantity >= element.offer.number) {
			element.subTotalWithDiscount = Math.round(
				subTotal * (1 - element.offer.percent / 100)
			);
			element.subTotal = subTotal;
		} else {
			element.subTotal = subTotal;
		}
	});
}

// Exercise 5
// Ya has desarrollado toda la lógica básica de la aplicación, ha llegado el momento de mostrar al usuario el carrito de compras.

// El código encargado de mostrar el carrito de compras en el modal con id "cartModal" debe incluirse dentro de la función printCart(). Te proporcionamos ya creada la maquetación de la tabla de productos, solo será necesario modificarla para que sea dinámica.

// El modal del carrito se abre al presionar el botón del carrito en la parte superior derecha de la pantalla.

function printCart() {
	// Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
	printCart();
}
