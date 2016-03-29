import QueryParamsFormatter from 'framework/formatters/query-params';

export default class RequestManager {
	send({ path, ok = ()=>{}, fail = ()=>{}, queryParams, data, user, password }) {
		const url = path + (queryParams ? '?' + QueryParamsFormatter(queryParams) : '');
		const params = {
			method: data ? 'POST' : 'GET',
			body: data ? JSON.stringify(data) : null
		};

		return fetch(url, params)
			.then(response => response.json())
			.then(ok)
			.catch(fail);
	}
};