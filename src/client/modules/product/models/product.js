import DataModel from 'framework/base/data-model';

export class ProductModel extends DataModel {
	constructor(id, typeId = '', manufacturer = '', model = '', price = 0, description = '', rating = 0) {
		super(id);
		Object.assign(this, {
			typeId,
			manufacturer,
			model,
			price,
			description,
			rating
		});
	}
};