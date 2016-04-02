import idGenerator from 'framework/id-generator';

export class ProductItem {
	constructor(id = idGenerator(), manufacturer = '', model = '', price = 0, description = '', rating = 0) {
		Object.assign(this, {
			id,
			manufacturer,
			model,
			price,
			description,
			rating
		});
	}
};