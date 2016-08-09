import DataModel from 'framework/base/data-model';

export default class ProductType extends DataModel {
	constructor(id, name = '', abbreviation = '', description = '') {
		super(id);
		Object.assign(this, {
			name,
			abbreviation,
			description
		});
	}
};