import { List } from 'immutable';
import reducerCreator from 'framework/redux/reducer-creator';
import ActionTypes from 'modules/product/redux/action-types';
import ProductModel from 'modules/product/models/product';

export default reducerCreator(new List(), {

	[ActionTypes.CREATE_PRODUCT](state, action) {
		const product = new ProductModel(action.data);
		return state.concat(product);
	},

	[ActionTypes.EDIT_PRODUCT](state, action) {
		const product = state.get(action.id);
		product.edit(action.data);
		return state.set(action.id, product);
	},

	[ActionTypes.DELETE_PRODUCT](state, action) {
		return state.delete(action.id);
	}

});