import {PCComponentModel} from './model';
import {PCComponentView} from './view';

export class PCComponentCtrl {
	constructor(rangeDatas = [], showOnInit = false) {
		this._models = [];
		this._views = {};
		this._root = document.querySelector('#app');

		this.createRange(...rangeDatas);
		if (showOnInit) {
			this.show();
		}
	}

	createRange(...pcComponentsDatas) {
		pcComponentsDatas.forEach(this.create, this);
		return this;
	}

	create(pcComponentData) {
		let model = new PCComponentModel(pcComponentData);
		this._models.push(model);
		this._views[model.id] = PCComponentView.createView(model);
		return this;
	}

	show() {
		let orderedViews = this._models.map((model) => {
			return this._views[model.id];
		});
		PCComponentView.renderViews(orderedViews, this._root);
		return this;
	}
};