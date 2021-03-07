class CarInsurance {
	constructor(products = []) {
		this.products = products;
		console.log('products', this.products);
	}
	addProduct(product) {
		this.products.push(product);
	}
	deleteProduct(index) {
		this.products.splice(index, 1);
	}
	updateProduct(index, product) {
		this.products[index] = product;
	}
	updatePrice() {
		this.products = this.products.map(product => {
			if (
				![
					'Full Coverage',
					'Mega Coverage',
					'Special Full Coverage'
				]
				.includes(product.name) &&
				product.price > 0
			) {
				product.price = product.price - 1;
			} else {
				if (product.price < 50) {
					product.price = product.price + 1;

					if (product.name == 'Special Full Coverage') {
						if (product.sellIn < 11 && product.price < 50) {
							product.price = product.price + 1;
						}
						if (product.sellIn < 6) {
							if (product.price < 50) {
								product.price = product.price + 1;
							}
						}
					}
				}
			}

			if (product.name != 'Mega Coverage') {
				product.sellIn = product.sellIn - 1;
			}
			if (product.sellIn < 0) {
				if (product.name != 'Full Coverage') {
					if (product.name != 'Special Full Coverage') {
						if (product.price > 0) {
							if (product.name != 'Mega Coverage') {
								product.price = product.price - 1;
							}
						}
					} else {
						product.price = product.price - product.price;
					}
				} else {
					if (product.price < 50) {
						product.price = product.price + 1;
					}
				}
			}
			return product;
		})
		return this.products;
	}
}
module.exports = CarInsurance