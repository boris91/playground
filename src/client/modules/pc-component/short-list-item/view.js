import './.styl';
import React from 'react';

const PriceFormatter = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'RUB',
	maximumSignificantDigits: 3
});

export default class PCComponentShortListItemView extends React.Component {
	handleClick() {
		window.open(this.props.link);
	}

	render() {
		return <div className='pc-component-short-list-item' onClick={this.handleClick.bind(this)}>
			<div className='name'>{this.props.name}</div>
			<div className='title'>{this.props.title}</div>
			<div className='price'>
				<div className='min'>{PriceFormatter.format(this.props.minPrice)}</div>
				<span>&nbsp;-&nbsp;</span>
				<div className='max'>{PriceFormatter.format(this.props.maxPrice)}</div>
			</div>
		</div>;
	}
};