import Event from 'framework/event';
import QueryParamsFormatter from 'framework/formatters/query-params';

export default class RequestManager {
	constructor(url, onOk, onFail) {
		this.url = url;
		this.ok = new Event(onOk);
		this.fail = new Event(onFail);
	}

	getData(urlPostfix = '', queryParamsObj = null) {
		return fetch(this.url + '/' + urlPostfix + '?' + QueryParamsFormatter(queryParamsObj))
			.then(response => response.json())
			.then(json => this.ok.trigger(json, urlPostfix))
			.catch(error => this.fail.trigger(error, urlPostfix));
	}
};