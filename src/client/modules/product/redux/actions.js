import ActionTypes from 'modules/product/redux/action-types';

export default {
	createProduct(data) {
		return {
			type: ActionTypes.CREATE_PRODUCT,
			data
		};
	},

	editProduct(id, data) {
		return {
			type: ActionTypes.EDIT_PRODUCT,
			data,
			id
		};
	},

	deleteProduct(id) {
		return {
			type: ActionTypes.DELETE_PRODUCT,
			id
		};
	}
};