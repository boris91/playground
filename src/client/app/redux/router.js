import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import AppView from 'app/view';

export default class AppRouter extends React.Component {
	render() {
		return <Router history={hashHistory}>
			<Route path="/" component={AppView}></Route>
		</Router>;
	}
};