import idGenerator from 'framework/id-generator';

export class ProductItem {
	constructor(manufacturer = '', model = '', price = 0, description = '', rating = 0) {
		Object.assign(this, {
			id: idGenerator(),
			name: `${manufacturer} ${model}`,
			manufacturer,
			model,
			price,
			description,
			rating
		});
	}
};