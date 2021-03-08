class CarInsurance {
	#products = [];
	constructor(products = []) {
		this.#products = products;
		console.log('products', this.#products);
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

	#updateProductFullCoverage(product) {
		product.sellIn = product.sellIn - 1;
		if (product.price < 50) {
			if (product.sellIn < 0) {
				product.price = product.price + 2;
			} else {
				product.price = product.price + 1;
			}
		}
		return product;
	}

	#updateProductMegaCoverage(product) {
		product.price = 80;
		return product;
	}

	#updateProductSpecialFullCoverage(product) {
		if (product.sellIn < 0) {
			product.price = 0;
		} else {
			if (product.sellIn > 5 && product.sellIn <= 10) {
				product.price = product.price + 2;
			} else if (product.sellIn <= 5) {
				product.price = product.price + 3;
			} else {
				product.price = product.price + 1;
			}
			if (product.price > 50) {
				product.price = 50;
			}
		}
		product.sellIn = product.sellIn - 1;
		return product;
	}

	#updateProductSuperSale(product) {
		product.sellIn = product.sellIn - 1;
		if (product.price < 50 && product.price >0) {
			product.price = product.price - 1;
		}
		return product;
	}

	#updateProductOtherCoverage(product) {
		product.price = product.price - 1;
		product.sellIn = product.sellIn - 1;
		if (product.sellIn < 0 && product.price > 0) {
			product.price = product.price - 1;
		}
		if (product.price < 0) {
			product.price = 0;
		}
		return product
	}

	updatePrice() {
		this.#products = this.#products.map(product => {
				switch (product.name) {
					case 'Full Coverage':
						product = this.#updateProductFullCoverage(product);
					break;
					case 'Mega Coverage':
						product = this.#updateProductMegaCoverage(product);
					break;
					case 'Special Full Coverage':
						product = this.#updateProductSpecialFullCoverage(product);
					break;
					case 'Super Sale':
						product = this.#updateProductSuperSale(product);
					break;
					default:
						product = this.#updateProductOtherCoverage(product);
					break;
				}
				return product;
		});
		return this.#products;
	}
}
module.exports = CarInsurance