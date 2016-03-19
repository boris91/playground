import './index.html';
import './app.styl';
import './img/favicon-32x32.ico';

import PCComponentCtrl from 'modules/pc-component/ctrl';
new PCComponentCtrl([
	['cpu-0', 'CPU', 'Intel Core i7-3970X',         16682700,   16682900,   'http://catalog.onliner.by/cpu/intel/corei73970xee'],
	['mbd-0', 'MBD', 'ASUS Z9PA-D8',                7726400,    7992600,    'http://catalog.onliner.by/motherboard/asus/z9pad8'],
	['ram-0', 'RAM', 'Kingston HyperX Savage',      5336800,    5616000,    'http://catalog.onliner.by/dram/kingston/hx424c12sbk432'],
	['ssd-0', 'SSD', 'Samsung 850 Evo',             6653600,    8022700,    'http://catalog.onliner.by/ssd/samsung/mz75e1t0bam'],
	['gpu-0', 'GPU', 'Gigabyte GeForce GTX 980',    13200300,   15730000,   'http://catalog.onliner.by/videocard/gigabyte/gvn980xtreme4gd'],
	['dsp-0', 'DSP', 'ASUS PB258Q',                 9509400,    9979400,    'http://catalog.onliner.by/display/asus/pb258q'],
	['snd-0', 'SND', 'Microlab Solo-4C',            972900,     1024900,    'http://catalog.onliner.by/sound/microlab/microsolo4c'],
	['kbd-0', 'KBD', 'Logitech K800',               2177000,    2670400,    'http://catalog.onliner.by/keyboards/logitech/logitechk800'],
	['mou-0', 'MOU', 'A4Tech Bloody R8-1',          579700,     725000,     'http://catalog.onliner.by/mouse/a4tech/a4techbloodyr8_1']
], true);

//var fetchParams = {
//	headers: new Headers({
//		"Origin": "http://catalog.onliner.by",
//		"Accept-Encoding": "gzip, deflate, sdch",
//		"Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4",
//		"User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36",
//		"Accept": "application/json, text/javascript, */*; q=0.01",
//		"Referer": "http://catalog.onliner.by/cpu",
//		"Connection": "keep-alive"
//	})
//};

/*fetch('https://catalog.api.onliner.by/search/cpu').then(function(response) {
	return response.json().then(function(json) {
		let centralProcessUnits = json.products.map(cpu => {
			return [cpu.id, 'CPU', cpu.full_name, cpu.prices.min, cpu.prices.max, cpu.url];
		});
		new PCComponentCtrl(centralProcessUnits, true);
	});
});*/