import idGenerator from 'framework/id-generator';

export default class ProductType {
	constructor(name = '', abbreviation = '', description = '') {
		Object.assign(this, {
			id: idGenerator(),
			name,
			abbreviation,
			description
		});
	}
};