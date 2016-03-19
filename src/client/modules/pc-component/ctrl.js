import PCComponentTypes from './types';
import PCComponentModel from './model';
import PCComponentShortListView from './short-list/view';
import React from 'react';
import ReactDOM from 'react-dom';
import RemoteRequester from 'modules/framework/services/remote-requester';

export default class PCComponentCtrl {
	constructor() {
		this._models = [];
		this._view = null;
		this._root = document.querySelector('#app');
		this._remoteRequester = new RemoteRequester('https://catalog.api.onliner.by/search');
		this.init();
	}

	init() {
		this._fetchAllComponents();
	}

	createRange(...pcComponentsDatas) {
		pcComponentsDatas.forEach(this._create, this);
		return this;
	}

	show() {
		this._view = <PCComponentShortListView models={this._models} totalPrice={this._getTotalPrices()}/>;
		ReactDOM.render(this._view, this._root);
	}

	_getTotalPrices() {
		let min = 0;
		let max = 0;
		this._models.forEach(model => {
			min += model.minPrice;
			max += model.maxPrice;
		});
		return {min, max};
	}

	_create(...pcComponentData) {
		let model = new PCComponentModel(...pcComponentData);
		this._models.push(model);
	}

	_fetchAllComponents() {
		this._fetchComponents(PCComponentTypes.CENTRAL_PROCESSING_UNIT)
			.then(this._fetchComponents.bind(this, PCComponentTypes.MOTHERBOARD))
			.then(this._fetchComponents.bind(this, PCComponentTypes.RANDOM_ACCESS_MEMORY))
			.then(this._fetchComponents.bind(this, PCComponentTypes.SOLID_STATE_DRIVE))
			.then(this._fetchComponents.bind(this, PCComponentTypes.GRAPHICS_PROCESSING_UNIT))
			.then(this._fetchComponents.bind(this, PCComponentTypes.DISPLAY))
			.then(this._fetchComponents.bind(this, PCComponentTypes.SOUND))
			.then(this._fetchComponents.bind(this, PCComponentTypes.KEYBOARD))
			.then(this._fetchComponents.bind(this, PCComponentTypes.MOUSE))
			.then(this.show.bind(this));
	}

	_fetchComponents(type, autoRender) {
		return this._remoteRequester.getData(type.requestFolderName, this._onComponentsFetched.bind(this, type.label, autoRender));
	}

	_onComponentsFetched(typeLabel, autoRender = false, data = null) {
		data.products.forEach(component => this._create(
			component.id,
			typeLabel,
			component.full_name,
			component.prices.min,
			component.prices.max,
			component.url
		));
	}
};