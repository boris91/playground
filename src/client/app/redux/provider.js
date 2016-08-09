import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from 'app/redux/router';
import appStore from 'app/redux/store';

export default class AppProvider extends React.Component {
	render() {
		return <Provider store={appStore}>
			<AppRouter history={history}/>
		</Provider>;
	}
};