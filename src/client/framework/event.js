export default class Event {
	constructor(...handlers) {
		this.handlers = [];
		this.addRange(...handlers);
	}

	add(handler, context, ...args) {
		if (typeof handler === 'function') {
			this.handlers.push(handler.bind(context, ...args));
			return this.handlers.length - 1;
		}
		return -1;
	}

	addRange(...handlers) {
		let index = this.handlers.length;
		handlers.forEach(handler => this.add(handler));
		return (this.handlers.length === index) ? -1 : index;
	}

	remove(index) {
		this.handlers.splice(index, 1);
	}

	trigger(...args) {
		this.handlers.forEach(handler => handler(...args));
	}
};