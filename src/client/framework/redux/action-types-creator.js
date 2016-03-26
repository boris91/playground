export default (...actionTypesArray) => {
	let actionTypesDictionary = {};
	actionTypesArray.forEach(actionType => actionTypesDictionary[actionType] = actionType);
	return actionTypesDictionary;
};