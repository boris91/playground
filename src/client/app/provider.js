import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from 'app/router';
import reducers from 'app/reducers';

const appReducer = combineReducers(reducers);
const appStore = createStore(appReducer);

export default class AppProvider extends React.Component {
	render() {
		return <Provider store={appStore}>
			<AppRouter history={history}/>
		</Provider>;
	}
};