import './.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import PriceFormatter from 'modules/framework/formatters/price';
import PCComponentShortListItemView from '../short-list-item/view';

export default class PCComponentShortListView extends React.Component {
	render() {
		return <div className='pc-component-short-list'>
			{this.props.models.map(model => <PCComponentShortListItemView {...model}/>)}
			<div className='total-label'>Total:</div>
			<div className='total-price'>
				<div className='min'>{PriceFormatter(this.props.totalPrice.min)}</div>
				<span>&nbsp;-&nbsp;</span>
				<div className='max'>{PriceFormatter(this.props.totalPrice.max)}</div>
			</div>
		</div>;
	}
};