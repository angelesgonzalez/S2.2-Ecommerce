import { products } from "./dummyData.js";

const cart = [];

let total = 0;

// Exercise 1
window.buy = function (id) {
	const foundItem = products.find((element) => element.id === id);
	if (foundItem) {
		let updatedfoundItem = {};
		const foundItemCart = cart.find((element) => element.id === foundItem.id);
		foundItemCart
			? foundItemCart.quantity++
			: (updatedfoundItem = { ...foundItem, quantity: 1 });
		if (!foundItemCart) cart.push(updatedfoundItem);
	}
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
	const total = cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);
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
