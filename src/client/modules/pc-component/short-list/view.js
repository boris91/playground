import './.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import PCComponentShortListItemView from '../short-list-item/view';

export default class PCComponentShortListView extends React.Component {
	render() {
		return <div className='pc-component-short-list'>
			{this.props.models.map(model => <PCComponentShortListItemView {...model}/>)}
		</div>;
	}
};