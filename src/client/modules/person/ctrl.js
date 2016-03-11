import {PersonModel} from './model';
import {PersonView} from './view';

class PersonCtrl {
	constructor() {
		this._count = 0;
		this._models = [];
		this._views = {};
		this._root = document.querySelector('#app');
	}

	createRange(persons) {
		persons.forEach((personData) => {
			this.create(personData.name, personData.age);
		});
		return this;
	}

	create(name, age) {
		let id = this._count++;
		let model = new PersonModel(id, name, age);
		this._models.push(model);
		this._views[id] = PersonView.createView(model);
		return this;
	}

	show() {
		let orderedViews = this._models.map((model) => {
			return this._views[model.getId()];
		});
		PersonView.renderViews(orderedViews, this._root);
		return this;
	}
}

export {PersonCtrl};