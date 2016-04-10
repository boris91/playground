import Task from 'framework/task';
import config from 'modules/product/config';
import ProductModel from 'modules/product/models/product';

const PRODUCT_ITEMS_PATH = config.itemsPath;

export default class FetchProductItemsTask extends Task {
	get path() {
		return PRODUCT_ITEMS_PATH;
	}

	_processData(data) {
		return data.map(this._createProductItem, this);
	}

	_processPartialData(partialData) {
		//TODO: implement
		return super._processPartialData(partialData);
	}

	_processError(error) {
		//TODO: implement
		return super._processError(error);
	}

	_createProductItem(itemArgs) {
		return new ProductModel(...itemArgs);
	}
};