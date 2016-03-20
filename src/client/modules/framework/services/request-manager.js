import Event from 'modules/framework/event';

export default class RequestManager {
	constructor(url, onOk, onFail) {
		this.url = url;
		this.ok = new Event(onOk);
		this.fail = new Event(onFail);
	}

	getData(urlPostfix = '') {
		return fetch(this.url + '/' + urlPostfix)
			.then(response => response.json())
			.then(json => this.ok.trigger(json, urlPostfix))
			.catch(error => this.fail.trigger(error, urlPostfix));
	}
};