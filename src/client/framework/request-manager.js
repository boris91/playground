import QueryParamsFormatter from 'framework/formatters/query-params';
import ResponseHeadersParser from 'framwework/parsers/response-headers';
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

	post(data, queryParams, headers) {
		return this._send(Methods.POST, JSON.stringify(data), queryParams, headers);
	}

	get(queryParams, headers) {
		return this._send(Methods.GET, null, queryParams, headers);
	}

	put(data, queryParams, headers) {
		return this._send(Methods.PUT, JSON.stringify(data), queryParams, headers);
	}

	patch(data, queryParams, headers) {
		return this._send(Methods.PATCH, JSON.stringify(data), queryParams, headers);
	}

	delete(queryParams, headers) {
		return this._send(Methods.DELETE, null, queryParams, headers);
	}

	get isInProgress() {
		return this._xhr.readyState === States.PEND;
	}

	get headers() {
		const headersString = this._xhr.getAllResponseHeaders();
		return ResponseHeadersParser(headersString);
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
		return this;
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
		return this;
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