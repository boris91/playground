export default (queryParamsObject) => {
	let queryParamsString = '';
	Object.keys(queryParamsObject).forEach(key => queryParamsString += key + '=' + queryParamsObject[key] + '&');
	return queryParamsString;
};