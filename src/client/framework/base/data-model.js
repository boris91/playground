import idGenerator from 'framework/id-generator';

export default class DataModel {
	constructor(id = idGenerator()) {
		this.id = id;
		this.created = this.edited = Date.now();
	}

	edit(propsTree) {
		Object.assign(this, propsTree);
		this.edited = Date.now();
	}
};