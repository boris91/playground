import Task from 'framework/task';
import config from 'modules/product/config';
import ProductType from 'modules/product/models/type';

const PRODUCT_TYPES_PATH = config.typesPath;

export default class FetchProductTypesTask extends Task {
	get path() {
		return PRODUCT_TYPES_PATH;
	}

	_processData(data) {
		return data.map(this._createProductType, this);
	}

	_processPartialData(partialData) {
		//TODO: implement
		return super._processPartialData(partialData);
	}

	_processError(error) {
		//TODO: implement
		return super._processError(error);
	}

	_createProductType(typeArgs) {
		return new ProductType(...typeArgs);
	}
};