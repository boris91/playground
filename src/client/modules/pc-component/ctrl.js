import PCComponentTypes from './types';
import PCComponentModel from './model';
import PCComponentShortListView from './short-list/view';
import React from 'react';
import ReactDOM from 'react-dom';
import RequestManager from 'framework/request-manager';

const ONLINER_SEARCH_URL = 'https://catalog.api.onliner.by/search';

export default class PCComponentCtrl {
	constructor() {
		this._models = [];
		this._view = null;
		this._root = document.querySelector('#app');
		this._requester = new RequestManager(ONLINER_SEARCH_URL, this._onComponentsFetched.bind(this));
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
			.then(() => this._fetchComponents(PCComponentTypes.MOTHERBOARD))
			.then(() => this._fetchComponents(PCComponentTypes.RANDOM_ACCESS_MEMORY))
			.then(() => this._fetchComponents(PCComponentTypes.SOLID_STATE_DRIVE))
			.then(() => this._fetchComponents(PCComponentTypes.GRAPHICS_PROCESSING_UNIT))
			.then(() => this._fetchComponents(PCComponentTypes.DISPLAY))
			.then(() => this._fetchComponents(PCComponentTypes.SOUND))
			.then(() => this._fetchComponents(PCComponentTypes.KEYBOARD))
			.then(() => this._fetchComponents(PCComponentTypes.MOUSE))
			.then(() => this.show());
	}

	_fetchComponents(type, autoRender) {
		return this._requester.getData(type.requestFolderName);
	}

	_onComponentsFetched(data, requestFolderName) {
		let type = PCComponentTypes.byRequestFolderName[requestFolderName];
		let typeLabel = type.label;
		let componentIdPrefix = type.shortName + '_';
		data.products.forEach(component => this._create(
			componentIdPrefix + component.name.replace(/ /g, '~'),
			typeLabel,
			component.full_name,
			component.prices.min,
			component.prices.max,
			component.url
		));
	}
};