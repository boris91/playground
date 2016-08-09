import { createStore, combineReducers } from 'redux';
import ProductReducer from 'modules/product/redux/reducer';

const allReducers = [
	ProductReducer
];

const appReducer = combineReducers(allReducers);
export default createStore(appReducer);