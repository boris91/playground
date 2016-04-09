import initialState from 'app/redux/initial-state';
import TypedDictionary from 'framework/collections/typed-dictionary';
import ProductType from 'modules/product/models/type';
import ProductModel from 'modules/product/models/product';

export default Object.assign(initialState, {
	product: {
		types: new TypedDictionary(ProductType),
		items: new TypedDictionary(ProductModel)
	}
});