export default {
	modules: {
		PCComponent: {
			Types: {
				labels: {
					CENTRAL_PROCESSING_UNIT: 'CPU',
					MOTHERBOARD: 'MBD',
					RANDOM_ACCESS_MEMORY: 'RAM',
					SOLID_STATE_DRIVE: 'SSD',
					GRAPHICS_PROCESSING_UNIT: 'GPU',
					DISPLAY: 'DSP',
					SOUND: 'SND',
					KEYBOARD: 'KBD',
					MOUSE: 'MOU'
				}
			}
		}
	},
	onlinerCatalog: {
		searchUrl: 'https://catalog.api.onliner.by/search',
		folders: {
			CENTRAL_PROCESSING_UNIT: 'cpu',
			MOTHERBOARD: 'motherboard',
			RANDOM_ACCESS_MEMORY: 'dram',
			SOLID_STATE_DRIVE: 'ssd',
			GRAPHICS_PROCESSING_UNIT: 'videocard',
			DISPLAY: 'display',
			SOUND: 'sound',
			KEYBOARD: 'keyboards',
			MOUSE: 'mouse'
		}
	}
};