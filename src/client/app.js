require('./index.html');
require('./app.styl');
import {PersonCtrl} from './modules/person/ctrl';
new PersonCtrl()
	.createRange([
		{ name: 'Denis', age: 23 },
		{ name: 'Maxim', age: 23 },
		{ name: 'Boris', age: 24 },
		{ name: 'Eugene', age: 26 },
		{ name: 'Alexey', age: 29 }
	])
	.show();