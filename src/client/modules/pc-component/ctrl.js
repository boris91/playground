import PCComponentModel from './model';
import PCComponentShortListView from './short-list/view';
import React from 'react';
import ReactDOM from 'react-dom';

export default class PCComponentCtrl {
	constructor(rangeDatas = [], showOnInit = false) {
		this._models = [];
		this._view = null;
		this._root = document.querySelector('#app');

		this.createRange(...rangeDatas);
		if (showOnInit) {
			this.show();
		}
	}

	createRange(...pcComponentsDatas) {
		pcComponentsDatas.forEach(this._create, this);
		this._view = <PCComponentShortListView models={this._models}/>;
		return this;
	}

	_create(pcComponentData) {
		let model = new PCComponentModel(...pcComponentData);
		this._models.push(model);
		return this;
	}

	show() {
		ReactDOM.render(this._view, this._root);
		return this;
	}
};