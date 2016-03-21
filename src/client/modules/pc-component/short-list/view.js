import './.styl';
import React from 'react';
import PriceFormatter from 'framework/formatters/price';
import PCComponentShortListItemView from '../short-list-item/view';

export default class PCComponentShortListView extends React.Component {
	constructor(props) {
		super(props);

		this.state = { selectedItemId: null };
	}

	render() {
		let props = this.props;
		return <div className='pc-component-short-list' onClick={this._onItemClick.bind(this)}>
			{props.models.map(model => <PCComponentShortListItemView {...model}/>)}
			<div className='total-label'>Total:</div>
			<div className='total-price'>
				<div className='min'>{PriceFormatter(props.totalPrice.min)}</div>
				<span>&nbsp;-&nbsp;</span>
				<div className='max'>{PriceFormatter(props.totalPrice.max)}</div>
			</div>
		</div>;
	}

	_getClickedItemId(node) {
		return node ? node.dataset && node.dataset.itemId || this._getClickedItemId(node.parentNode) : null;
	}

	_onItemClick(event) {
		this.setState({
			selectedItemId: this._getClickedItemId(event.target)
		});
	}
};