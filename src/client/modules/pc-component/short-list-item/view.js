import './.styl';
import React from 'react';
import PriceFormatter from 'framework/formatters/price';

export default class PCComponentShortListItemView extends React.Component {
	render() {
		return <div className='pc-component-short-list-item' data-item-id={this.props.id}>
			<div className='name'>{this.props.name}</div>
			<div className='title'>{this.props.title}</div>
			<div className='price'>
				<div className='min'>{PriceFormatter(this.props.minPrice)}</div>
				<span>&nbsp;-&nbsp;</span>
				<div className='max'>{PriceFormatter(this.props.maxPrice)}</div>
			</div>
		</div>;
	}
};