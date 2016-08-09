import React from 'react';

export default class AppView extends React.Component {
	render() {
		return <div id='app' className='app'>
			{this.props.children}
		</div>;
	}
};