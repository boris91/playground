import ItemType from 'modules/framework/item-type';

export default {
	CENTRAL_PROCESSING_UNIT: new ItemType('CPU', 'cpu'),
	MOTHERBOARD: new ItemType('MBD', 'motherboard'),
	RANDOM_ACCESS_MEMORY: new ItemType('RAM', 'dram'),
	SOLID_STATE_DRIVE: new ItemType('SSD', 'ssd'),
	GRAPHICS_PROCESSING_UNIT: new ItemType('GPU', 'videocard'),
	DISPLAY: new ItemType('DSP', 'display'),
	SOUND: new ItemType('SND', 'sound'),
	KEYBOARD: new ItemType('KBD', 'keyboards'),
	MOUSE: new ItemType('MOU', 'mouse')
};