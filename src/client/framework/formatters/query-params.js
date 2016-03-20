export default (queryParamsObject) => {
	let queryParamsString = '';
	if (queryParamsObject) {
		Object.keys(queryParamsObject).forEach(key => queryParamsString += key + '=' + queryParamsObject[key] + '&');
	}
	return queryParamsString;
};