import QueryParamsFormatter from 'framework/formatters/query-params';
import ResponseHeadersParser from 'framework/parsers/response-headers';
import { ASYNC, RESPONSE_TYPE, Methods, Events, EventsOrder, States } from 'framework/request-constants';

export default class HttpRequest {
	constructor(path = '', user = '', password = '', timeout = 0, ...eventListeners/*onLoad, onProgress, onError, onTimeout*/) {
		this._xhr = new XMLHttpRequest();
		this._xhr.responseType = RESPONSE_TYPE;
		this.init(...arguments);
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
		listeners.forEach((listener, index) => {
			const eventName = Events[EventsOrder[index]];
			const decoratedListener = this._eventListenerDecorator.bind(this, listener);
			this._setListener(eventName, decoratedListener);
		}, this);
		return this;
	}

	setPath(path) {
		this._path = path;
		return this;
	}

	setTimeout(timeoutMs) {
		this._xhr.timeout = timeoutMs;
		return this;
	}

	setCredentials(user, password) {
		this._xhr.withCredentials = (user && password);
		this._user = user;
		this._password = password;
		return this;
	}

	abort() {
		this._xhr.abort();
		return this;
	}

	clear() {
		this._path = this._user = this._password = '';
		this.setListeners(null, null, null, null);
		this._timeout = 0;
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

	_eventListenerDecorator(listener, event) {
		return listener(event.target.response);
	}
};