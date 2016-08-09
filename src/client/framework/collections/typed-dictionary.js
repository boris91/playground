export default class TypedDictionary {
	constructor(Type, itemsPropsArray = []) {
		this._Type = Type;
		this._items = {};
		this.addRange(itemsPropsArray);
	}

	get count() {
		return Object.keys(this._items).length;
	}

	get(id) {
		return this._items[id];
	}

	has(id) {
		return id in this._items;
	}

	add(...itemProps) {
		const item = new this._Type(...itemProps);
		this._items[item.id] = item;
		return this;
	}

	addRange(itemsPropsArray) {
		itemsPropsArray.forEach(this.add, this);
		return this;
	}

	remove(id) {
		delete this._items[id];
		return this;
	}

	clear() {
		this._items = {};
		return this;
	}

	setProp(id, key, value) {
		this._items[id][key] = value;
		return this;
	}

	edit(id, props) {
		const item = this._items[id];
		for (let key in props) {
			item[key] = props[key];
		}
		return this;
	}

	getProp(id, key) {
		return this._items[id][key];
	}

	map(mapper, context) {
		const items = this._items;
		let result = [];

		for (let id in items) {
			result.push(mapper.call(context, items[id], id));
		}

		return result;
	}

	each(handler, context) {
		const items = this._items;

		for (let id in items) {
			handler.call(context, items[id], id);
		}

		return this;
	}
};