import idGenerator from 'framework/idGenerator';

export class ProductTypeModel {
	constructor(name = '', description = '') {
		Object.assign(this, {
			id: idGenerator(),
			name,
			description
		});
	}
};