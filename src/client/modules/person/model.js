class PersonModel {
	constructor(id, name, age) {
		Object.assign(this, { name, age, id, key: id });
	}

	getInfo() {
		return `My name is ${this.name}, I'm ${this.age} years old.`;
	}

	getId() {
		return this.id;
	}
}

export {PersonModel};