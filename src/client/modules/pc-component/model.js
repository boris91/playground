export class PCComponentModel {
	constructor([name = 'Неизвестный компонент', title = '-', prices = '0–0', link = '#', id = `${name}_${title}`]) {
		prices = prices.replace(/ /g, '').split('–');

		Object.assign(this, {
			id,
			name,
			title,
			price: Math.round((parseInt(prices[0]) + parseInt(prices[1])) / 2),
			link,
			key: id
		});
	}
};