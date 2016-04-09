import reducerCreator from 'framework/redux/reducer-creator';
import ActionTypes from 'modules/product/redux/action-types';
import initialState from 'modules/product/redux/initial-state';

export default reducerCreator(initialState, {

	[ActionTypes.CREATE_PRODUCT](state, action) {
		state.product.items.add(action.data);
		return state;
	},

	[ActionTypes.EDIT_PRODUCT](state, action) {
		state.product.items.edit(action.id, action.data);
		return state;
	},

	[ActionTypes.DELETE_PRODUCT](state, action) {
		state.product.items.remove(action.id);
		return state;
	}

});