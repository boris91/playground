import './.styl';
import React from 'react';
import ReactDOM from 'react-dom';

const PriceFormatter = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'RUB',
	maximumSignificantDigits: 3
});

export class PCComponentView extends React.Component {
	static createView(model) {
		return React.createElement(PCComponentView, model);
	}

	static renderViews(views, root) {
		ReactDOM.render(<div className='pc-components-list'>{views}</div>, root);
	}

	handleClick() {
		window.open(this.props.link);
	}

	render() {
		return <div className='pc-component-item' onClick={this.handleClick.bind(this)}>
			<div className='name'>{this.props.name}</div>
			<div className='title'>{this.props.title}</div>
			<div className='price'>{PriceFormatter.format(this.props.price)}</div>
		</div>;
	}
};