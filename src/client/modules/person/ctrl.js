import PersonModel from './model';
import PersonView from './view';

export class PersonCtrl {
	constructor() {
		this._count = 0;
		this._models = [];
		this._views = {};
		this._root = document.querySelector('#app');
	}

	createRange(...persons) {
		persons.forEach(this.create, this);
		return this;
	}

	create({name, age}) {
		let id = this._count++;
		let model = new PersonModel(id, name, age);
		this._models.push(model);
		this._views[id] = PersonView.createView(model);
		return this;
	}

	show() {
		let orderedViews = this._models.map((model) => {
			return this._views[model.id];
		});
		PersonView.renderViews(orderedViews, this._root);
		return this;
	}
};