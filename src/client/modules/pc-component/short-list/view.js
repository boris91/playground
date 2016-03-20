import './.styl';
import React from 'react';
import PriceFormatter from 'framework/formatters/price';
import PCComponentShortListItemView from '../short-list-item/view';

export default class PCComponentShortListView extends React.Component {
	_getClickedItemId(node) {
		return node ? node.dataset && node.dataset.itemId || this._getClickedItemId(node.parentNode) : null;
	}

	_onItemClick(event) {
		console.log(this._getClickedItemId(event.target));
	}

	render() {
		return <div className='pc-component-short-list' onClick={this._onItemClick.bind(this)}>
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