import reducerCreator from 'framework/redux/reducer-creator';
import ActionTypes from 'modules/product/redux/action-types';
import initialState from 'modules/product/redux/initial-state';

export default reducerCreator(initialState, {

	[ActionTypes.CREATE_PRODUCT](stateCopy, action) {
		stateCopy.product.items.add(action.data);
	},

	[ActionTypes.EDIT_PRODUCT](stateCopy, action) {
		stateCopy.product.items.edit(action.id, action.data);
	},

	[ActionTypes.DELETE_PRODUCT](stateCopy, action) {
		stateCopy.product.items.remove(action.id);
	}

});