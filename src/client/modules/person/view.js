require('./.styl');

const React = require('react');
const ReactDOM = require('react-dom');

const PERSONS_LIST_DOM_PROPS = { className: 'persons-list' };
const PERSON_DOM_PROPS = { className: 'person-item' };
const PERSON_NAME_DOM_PROPS = { className: 'name', key: 0 };
const PERSON_AGE_DOM_PROPS = { className: 'age', key: 1 };

export class PersonView extends React.Component {
	static createView(model) {
		return React.createElement(PersonView, model);
	}

	static renderViews(views, root) {
		let viewsContainer = React.createElement('div', PERSONS_LIST_DOM_PROPS, views);
		ReactDOM.render(viewsContainer, root);
	}

	render() {
		let nameElem = React.createElement('div', PERSON_NAME_DOM_PROPS, `${this.props.name}`);
		let ageElem = React.createElement('div', PERSON_AGE_DOM_PROPS, `${this.props.age}`);
		return React.createElement('div', PERSON_DOM_PROPS, [nameElem, ageElem]);
	}
};