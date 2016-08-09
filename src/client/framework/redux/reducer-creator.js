import stateCopier from 'framework/redux/state-copier';

export default (defaultState, actionProcessors) => {
	return (state = defaultState, action) => {
		const actionProcessor = actionProcessors[action.type];
		if (actionProcessor) {
			const stateCopy = stateCopier(state);
			actionProcessor(stateCopy, action);
			return stateCopy;
		} else {
			return state;
		}
	};
};