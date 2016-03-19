export default class RemoteRequester {
	constructor(url = '') {
		this.url = url;
	}

	getData(urlPostfix = '', onOk = ()=>{}, onFail = ()=>{}) {
		return fetch(this.url + '/' + urlPostfix)
			.then(response => response.json())
			.then(onOk)
			.catch(onFail);
	}

	setData(urlPostfix, data){
		fetch(this.url + (urlPostfix ? '/' + urlPostfix : ''), data ? { body: JSON.stringify(data) } : undefined);
	}
};