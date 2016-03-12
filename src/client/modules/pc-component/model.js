export class PCComponentModel {
	constructor([name = 'Неизвестный компонент', title = '-', price = 0, link = '#', id = `${name}_${title}_${price}`]) {
		Object.assign(this, {
			id,
			name,
			title,
			price,
			link,
			key: id
		});
	}
};