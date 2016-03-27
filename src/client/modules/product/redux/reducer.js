import { List } from 'immutable';
import reducerCreator from 'framework/redux/reducer-creator';
import ActionTypes from 'modules/product/redux/action-types';

export default reducerCreator(new List(), {
	[ActionTypes.CREATE_PRODUCT]: (state, action) => state.concat(action.data),
	[ActionTypes.EDIT_PRODUCT]: (state, action) => state.set(action.id, action.data),
	[ActionTypes.DELETE_PRODUCT]: (state, action) => state.delete(action.id)
});