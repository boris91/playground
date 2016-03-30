import QueryParamsFormatter from 'framework/formatters/query-params';

const GET_METHOD = 'GET';
const POST_METHOD = 'POST';
const ASYNC = true;

const SUCCESS_EVENT =  { name: 'load',     listener: '_success' };
const PROGRESS_EVENT = { name: 'progress', listener: '_progress' };
const ERROR_EVENT =    { name: 'error',    listener: '_error' };

export default class RequestManager {
	constructor(path, success, progress, error, user, password) {
		Object.assign(this, {
			_xhr: new XMLHttpRequest(),
			_path: path,
			_user: user,
			_password: password
		});
		this.setListeners(success, progress, error);
	}

	get(queryParams, headers) {
		this._send(GET_METHOD, null, queryParams, headers);
	}

	post(data, queryParams, headers) {
		this._send(POST_METHOD, JSON.stringify(data), queryParams, headers);
	}

	setListeners(success, progress, error) {
		return this
			._setListener(SUCCESS_EVENT, success)
			._setListener(PROGRESS_EVENT, progress)
			._setListener(ERROR_EVENT, error);
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

	_send(method, data, queryParams, headers) {
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

	_setListener(event, newListener) {
		const oldListener = this[event.listener];
		if (oldListener) {
			this._xhr.removeEventListener(event.name, oldListener);
		}
		this[event.listener] = newListener;
		if (newListener) {
			this._xhr.addEventListener(event.name, newListener);
		}
		return this;
	}
};