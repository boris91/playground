export default (defaultState, actionProcessors) => {
	return (state = defaultState, action) => actionProcessors[action.type](state, action);
};