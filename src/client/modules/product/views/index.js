import React from 'react';
import ProductTypeView from 'modules/product/views/type';

export default class ProductsView extends React.Component {
	render() {
		const types = this.state && this.state.productTypes || [];
		return <div id='products' className='products'>
			{types.map(type => <ProductTypeView {...type} key={type.id}/>)}
		</div>;
	}
};