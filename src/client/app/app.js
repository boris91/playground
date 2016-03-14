import './index.html';
import './app.styl';
import './img/favicon-32x32.ico';

import PCComponentCtrl from 'modules/pc-component/ctrl';
new PCComponentCtrl([
	['CPU', 'Intel Core i7-3970X',      '16 682 700 – 16 682 900',  'http://catalog.onliner.by/cpu/intel/corei73970xee'],
	['MBD', 'ASUS Z9PA-D8',             '7 726 400 – 7 992 600',    'http://catalog.onliner.by/motherboard/asus/z9pad8'],
	['RAM', 'Kingston HyperX Savage',   '5 336 800 – 5 616 000',    'http://catalog.onliner.by/dram/kingston/hx424c12sbk432'],
	['SSD', 'Samsung 850 Evo',          '6 653 600 – 8 022 700',    'http://catalog.onliner.by/ssd/samsung/mz75e1t0bam'],
	['GPU', 'Gigabyte GeForce GTX 980', '13 200 300 – 15 730 000',  'http://catalog.onliner.by/videocard/gigabyte/gvn980xtreme4gd']
], true);