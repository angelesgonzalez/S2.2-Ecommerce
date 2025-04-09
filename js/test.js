const addProduct = (id) => {
	const product = products.find((element) => element.id === id);
	if (product) {
		const newProduct = {
			...product,
			quantity: 1,
			getSubtotal: function () {
				return this.price * this.quantity;
			},
		};
		cart.push(newProduct);
		return newProduct;
	}
};
