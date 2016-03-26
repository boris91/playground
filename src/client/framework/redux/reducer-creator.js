const EMPTY_ACTION_PROCESSOR = (state, action) => state;

export default (defaultState, actionProcessors) => {
	return (state = defaultState, action) => {
		return (actionProcessors[action.type] || EMPTY_ACTION_PROCESSOR)(state, action);
	};
};