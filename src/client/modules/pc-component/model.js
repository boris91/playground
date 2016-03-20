let instancesCounter = 0;

export default class PCComponentModel {
	static get newKey() {
		return '' + ++instancesCounter;
	}

	constructor(key = PCComponentModel.newKey, name = '-', title = '-', minPrice = 0, maxPrice = 0, link = '#') {
		Object.assign(this, {
			id: key,
			key,
			name,
			title,
			minPrice,
			maxPrice,
			link
		});
	}
};