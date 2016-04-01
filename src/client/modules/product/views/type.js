import React from 'react';

export default class ProductTypeView extends React.Component {
	render() {
		return <div className='product-type'>
			{this.props.name}
			<br/>
			[{this.props.description}]
		</div>;
	}
};