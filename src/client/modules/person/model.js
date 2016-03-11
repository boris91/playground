export class PersonModel {
	constructor(id, name = 'Unnamed-Bitch', age = 0) {
		Object.assign(this, {
			name,
			age,
			id,
			key: id
		});
	}
};