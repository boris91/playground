import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from 'app/router';
import appReducers from 'app/reducers';

const appReducer = combineReducers(appReducers);
const appStore = createStore(appReducer);

export default class AppProvider extends React.Component {
	render() {
		return <Provider store={appStore}>
			<AppRouter history={history}/>
		</Provider>;
	}
};