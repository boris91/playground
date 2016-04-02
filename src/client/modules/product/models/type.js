import idGenerator from 'framework/id-generator';

export default class ProductType {
	constructor(id = idGenerator(), name = '', abbreviation = '', description = '') {
		Object.assign(this, {
			id,
			name,
			abbreviation,
			description
		});
	}
};