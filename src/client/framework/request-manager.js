import QueryParamsFormatter from 'framework/formatters/query-params';
import { ASYNC, Methods, Events, EventsOrder, States } from 'framework/request-constants';

export default class RequestManager {
	constructor(path, user, password, timeout, ...eventListeners/*onLoad, onProgress, onError, onTimeout*/) {
		this.init(...arguments)
			._xhr = new XMLHttpRequest();
	}

	init(path, user, password, timeout, ...eventListeners/*onLoad, onProgress, onError, onTimeout*/) {
		this._path = path;
		this._listeners = {};
		this.setCredentials(user, password)
			.setListeners(...eventListeners)
			.timeout = timeout;
		return this;
	}

	get(queryParams, headers) {
		this._send(Methods.GET, null, queryParams, headers);
	}

	post(data, queryParams, headers) {
		this._send(Methods.POST, JSON.stringify(data), queryParams, headers);
	}

	get isInProgress() {
		return this._xhr.readyState === States.PEND;
	}

	get headers() {
		//TODO: modify to return Object instead of String
		return this._xhr.getAllResponseHeaders();
	}

	getHeader(key) {
		return this._xhr.getResponseHeader(key);
	}

	setListeners(...listeners/*onLoad, onProgress, onError, onTimeout*/) {
		listeners.forEach((listener, index) => this._setListener(EventsOrder[index], listener));
		return this;
	}

	set timeout(timeoutMs) {
		this._xhr.timeout = timeoutMs;
	}

	setCredentials(user, password) {
		this._user = user;
		this._password = password;
		return this;
	}

	abort() {
		this._xhr.abort();
		return this;
	}

	clear() {
		delete this._path;
		delete this._user;
		delete this._password;
		this.setListeners(null, null, null, null);
		this.timeout = undefined;
	}

	_send(method, data, queryParams, headers) {
		if (this.isInProgress) {
			this.abort();
		}

		const xhr = this._xhr;
		const url = this._path + (queryParams ? '?' + QueryParamsFormatter(queryParams) : '');
		xhr.open(method, url, ASYNC, this._user, this._password);
		if (headers) {
			for (let key in headers) {
				xhr.setRequestHeader(key, headers[key]);
			}
		}
		xhr.send(data);
	}

	_setListener(eventName, newListener) {
		this._xhr.removeEventListener(eventName, this._listeners[eventName]);
		this._listeners[eventName] = newListener;
		if (newListener) {
			this._xhr.addEventListener(eventName, newListener);
		}
		return this;
	}
};