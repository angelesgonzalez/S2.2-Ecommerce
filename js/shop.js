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
				subtotal: function () {
					if (this.offer) {
						return;
					} else {
						return this.price * this.quantity;
					}
				},
			});
	};

	const existingCartItem = cart.find((element) => element.id === id);
	existingCartItem ? existingCartItem.quantity++ : addProduct(id);

	console.log(cart);
};

// Exercise 2
window.cleanCart = function () {
	const cartList = document.getElementById("cart_list");
	const totalPrice = document.getElementById("total_price");
	cart.length = 0;
	if (cartList) cartList.innerHTML = "";
	if (totalPrice) totalPrice.innerHTML = 0;
};

// Exercise 3
function calculateTotal() {
	//chequear si tiene .offer
	//multiplicar .cantidad x .precio
	//adjuntar subtotal al objeto
	// bucle for para sumar el total del carrito

	for (let i = 0; i < cart.length; i++) {}

	// const total = cart.reduce(
	// 	(accumulator, currentValue) => accumulator + currentValue
	// );
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
