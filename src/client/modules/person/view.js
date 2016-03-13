import './.styl';
import React from 'react';
import ReactDOM from 'react-dom';

export class PersonView extends React.Component {
	static createView(model) {
		return React.createElement(PersonView, model);
	}

	static renderViews(views, root) {
		ReactDOM.render(<div className='persons-list'>{views}</div>, root);
	}

	render() {
		return <div className='person-item'>
			<div className='name'>{this.props.name}</div>
			<div className='age'>{this.props.age}</div>
		</div>;
	}
};