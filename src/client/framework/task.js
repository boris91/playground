import HttpRequest from 'framework/http-request';

export default class Task {
	constructor(onLoad = ()=>{}, onProgress = ()=>{}, onError = ()=>{}, config = {}) {
		this.configure(config);

		this._onTaskLoad = onLoad;
		this._onTaskProgress = onProgress;
		this._onTaskError = onError;

		const eventListeners = [
			this._onRequestLoad.bind(this),
			this._onRequestProgress.bind(this),
			this._onRequestError.bind(this),
			this._onRequestError.bind(this)
		];

		this._httpRequest = new HttpRequest(this.path, this._user, this._password, this._timeout, ...eventListeners);
		this._isRunning = false;
		this._isSucceed = false;
		this._isStopped = false;
	}

	get path() {
		return '';
	}

	configure({ headers = null, user = '', password = '', timeout = 0 }) {
		this._headers = headers;
		this._user = user;
		this._password = password;
		this._timeout = timeout;
	}

	get isRunning() {
		return this._isRunning;
	}

	get isSucceed() {
		return this._isSucceed;
	}

	get isStopped() {
		return this._isStopped;
	}

	run(params) {
		this._isRunning = true;
		this._isSucceed = false;
		this._isStopped = false;
		this._httpRequest.get(params, this._headers);
	}

	stop() {
		if (this._isRunning) {
			this._isRunning = false;
			this._isStopped = true;
			this._httpRequest.abort();
		}
	}

	_onRequestLoad(data) {
		this._isRunning = false;
		this._isSucceed = true;
		const processedData = this._processData(data);
		this._onTaskLoad(processedData);
	}

	_onRequestProgress(partialData) {
		const processedPartialData = this._processPartialData(partialData);
		this._onTaskProgress(processedPartialData);
	}

	_onRequestError(error) {
		this._isRunning = false;
		this._isSucceed = false;
		const processedError = this._processError(error);
		this._onTaskError(processedError);
	}

	_processData(data) {
		/**
		 * Process data in ChildClass._processData method.
		 */
		return data;
	}

	_processPartialData(partialData) {
		/**
		 * Process partialData in ChildClass._processPartialData method.
		 */
		return partialData;
	}

	_processError(error) {
		/**
		 * Process error in ChildClass._processError method.
		 */
		return error;
	}
};