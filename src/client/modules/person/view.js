require('./.styl');
const React = require('react');
const ReactDOM = require('react-dom');

class PersonView extends React.Component {
	static get nameFieldDomProps() {
		return {
			className: 'name',
			key: 0
		};
	}

	static get ageFieldDomProps() {
		return {
			className: 'age',
			key: 1
		};
	}

	static get viewDomProps() {
		return {
			className: 'person-item'
		};
	}

	static get containerDomProps() {
		return {
			className: 'persons-list'
		};
	}

	static createView(model) {
		return React.createElement(PersonView, model);
	}

	static renderViews(views, root) {
		let viewsContainer = React.createElement('div', PersonView.containerDomProps, views);
		ReactDOM.render(viewsContainer, root);
	}

	render() {
		let nameElem = React.createElement('div', PersonView.nameFieldDomProps, `${this.props.name}`);
		let ageElem = React.createElement('div', PersonView.ageFieldDomProps, `${this.props.age}`);
		return React.createElement('div', PersonView.viewDomProps, [nameElem, ageElem]);
	}
}

export {PersonView};