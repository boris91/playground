require('./index.html');
require('./app.styl');
require('./img/favicon-32x32.ico');

import {PCComponentCtrl} from '../modules/pc-component/ctrl';
new PCComponentCtrl([
	['Процессор', 'Intel Core i7-5960X', 24370400, 'http://catalog.onliner.by/cpu/intel/corei75960x'],
	['Материнская плата', 'ASUS X99-M WS', 7852800, 'http://catalog.onliner.by/motherboard/asus/x99mws'],
	['Оперативная память', 'Kingston HyperX Savage 4x8GB DDR4 PC4-19200 [HX424C12SBK4/32]', 5336800, 'http://catalog.onliner.by/dram/kingston/hx424c12sbk432']
], true);

/*import {PersonCtrl} from '../modules/person/ctrl';

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
	.show();*/