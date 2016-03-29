import RequestManager from 'framework/request-manager';

export default class Task {
	constructor(path, ok = ()=>{}, fail = ()=>{}) {
		Object.assign(this, {
			_path: path,
			_ok: ok,
			_fail: fail,
			_pending: false
		});
		this._req = new RequestManager();
	}

	run(params, data) {
		this._req.send({
			path: this._path,
			ok: this._ok,
			fail: this._fail
		});
	}

	stop() {}
};