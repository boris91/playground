require('./index.html');
require('./app.styl');
require('./img/favicon-32x32.ico');

import {PersonCtrl} from '../modules/person/ctrl';

new PersonCtrl()
	.createRange({
		name: 'Andre Agassi',
		age: 20
	}, {
		name: 'Boris Becker',
		age: 30
	}, {
		name: 'Cinderella',
		age: 40
	}, {
		name: 'Douglas Crockford',
		age: 50
	}, {
		//unnamed bitch
	})
	.show();