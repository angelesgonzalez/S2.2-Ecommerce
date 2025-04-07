// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
import { products } from "./dummyData.js";

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1
function buy(id) {
	console.log(`botonClicado`);
	const foundItem = products.find((element) => element.id === id);
	if (foundItem) {
		let updatedfoundItem = {};
		const foundItemCart = cart.find((element) => element.id === foundItem.id);
		foundItemCart
			? foundItemCart.quantity++
			: (updatedfoundItem = { ...foundItem, quantity: 1 });
		if (!foundItemCart) cart.push(updatedfoundItem);
	}
}

// Exercise 2
function cleanCart() {}

// Exercise 3
function calculateTotal() {
	// Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
	// Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
	// Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
	printCart();
}
