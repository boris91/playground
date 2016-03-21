import PCComponentTypes from './types';
import PCComponentModel from './model';
import PCComponentShortListView from './short-list/view';
import React from 'react';
import ReactDOM from 'react-dom';
import RequestManager from 'framework/request-manager';
import config from 'app/config';

const PCComponentConfig = config.modules.PCComponent;
const PCComponentTypesConfig = PCComponentConfig.Types;
const OnlinerCatalogConfig = config.onlinerCatalog;

export default class PCComponentCtrl {
	constructor() {
		this._models = [];
		this._view = null;
		this._root = document.querySelector('#app');
		this._requester = new RequestManager(OnlinerCatalogConfig.searchUrl, this._onComponentsFetched.bind(this));
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
		let types = Object.keys(PCComponentTypes);
		let promise = this._fetchComponents(types[0]);
		for (let i = 1, typesCount = types.length; i < typesCount; i++) {
			promise = promise.then(() => this._fetchComponents(types[i]));
		}
		promise.then(() => this.show());
	}

	_fetchComponents(type) {
		return this._requester.getData(OnlinerCatalogConfig.folders[type]);
	}

	_onComponentsFetched(data, onlinerCatalogFolder) {
		let type = Object.keys(PCComponentTypes).find(type => onlinerCatalogFolder === OnlinerCatalogConfig.folders[type]);
		let typeLabel = PCComponentTypesConfig.labels[type];
		let componentIdPrefix = type + '_';
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