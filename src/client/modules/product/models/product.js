import DataModel from 'framework/base/data-model';

export class ProductModel extends DataModel {
	constructor({
			manufacturer = '',
			model = '',
			price = 0,
			description = '',
			rating = 0
		} = {}) {

		super(...arguments);
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