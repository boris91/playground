import DataModel from 'framework/base/data-model';

export default class ProductType extends DataModel {
	constructor({
			name = '',
			abbreviation = '',
			description = ''
		} = {}) {

		super(...arguments);
		Object.assign(this, {
			id,
			name,
			abbreviation,
			description
		});
	}
};