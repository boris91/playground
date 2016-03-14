let instancesCounter = 0;

export default class PCComponentModel {
	static get newId() {
		return '' + ++instancesCounter;
	}

	constructor(name = '-', title = '-', prices = '0–0', link = '#') {
		prices = prices.replace(/ /g, '').split('–');
		let id = PCComponentModel.newId;

		Object.assign(this, {
			id,
			name,
			title,
			minPrice: parseInt(prices[0]),
			maxPrice: parseInt(prices[1]),
			link,
			key: id
		});
	}
};