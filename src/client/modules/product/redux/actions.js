import idGenerator from 'framework/id-generator';
import ActionTypes from 'modules/product/redux/action-types';

export default {
	createProduct: (data) => {
		let id = idGenerator();
		return {
			type: ActionTypes.CREATE_PRODUCT,
			data: Object.assign(data, {
				created: Date.now(),
				id
			}),
			id
		};
	},

	editProduct: (id, data) => {
		return {
			type: ActionTypes.EDIT_PRODUCT,
			data: Object.assign(data, {
				edited: Date.now()
			}),
			id
		};
	},

	deleteProduct: (id) => {
		return {
			type: ActionTypes.DELETE_PRODUCT,
			id
		};
	}
};