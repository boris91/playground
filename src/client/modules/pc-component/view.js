require('./.styl');

const React = require('react');
const ReactDOM = require('react-dom');

const DOM_PROPS = {
	list: { className: 'pc-components-list' },
	item: { className: 'pc-component-item' },
	name: { className: 'name', key: 0 },
	title: { className: 'title', key: 1 },
	price: { className: 'price', key: 2 }
};

const FORMATTERS = {
	price: new Intl.NumberFormat('ru', {
		style: 'currency',
		currency: 'RUB',
		maximumSignificantDigits: 3
	})
};

export class PCComponentView extends React.Component {
	static tryToFormat(propName, value) {
		let formatter = FORMATTERS[propName];
		return formatter ? formatter.format(value) : value;
	}

	static createView(model) {
		return React.createElement(PCComponentView, model);
	}

	static renderViews(views, root) {
		let viewsContainer = PCComponentView.prototype.newNode('div', 'list', views);
		ReactDOM.render(viewsContainer, root);
	}

	newNode(tag, propName, childNodesOrInnerText = `${this.props[propName]}`) {
		return React.createElement(tag, DOM_PROPS[propName], PCComponentView.tryToFormat(propName, childNodesOrInnerText));
	}

	render() {
		let childNodes = [
			this.newNode('div', 'name'),
			this.newNode('div', 'title'),
			this.newNode('div', 'price')
		];
		return this.newNode('div', 'item', childNodes);
	}
};