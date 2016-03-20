import ItemType from 'framework/item-type';

const CENTRAL_PROCESSING_UNIT = new ItemType('CPU', 'cpu');
const MOTHERBOARD = new ItemType('MBD', 'motherboard');
const RANDOM_ACCESS_MEMORY = new ItemType('RAM', 'dram');
const SOLID_STATE_DRIVE = new ItemType('SSD', 'ssd');
const GRAPHICS_PROCESSING_UNIT = new ItemType('GPU', 'videocard');
const DISPLAY = new ItemType('DSP', 'display');
const SOUND = new ItemType('SND', 'sound');
const KEYBOARD = new ItemType('KBD', 'keyboards');
const MOUSE = new ItemType('MOU', 'mouse');

class PCComponentTypes {}

Object.assign(PCComponentTypes, {
	CENTRAL_PROCESSING_UNIT,
	MOTHERBOARD,
	RANDOM_ACCESS_MEMORY,
	SOLID_STATE_DRIVE,
	GRAPHICS_PROCESSING_UNIT,
	DISPLAY,
	SOUND,
	KEYBOARD,
	MOUSE
});

let typesByRequestFolderName = {};

Object.keys(PCComponentTypes).forEach(typeName => {
	let type = PCComponentTypes[typeName];
	Object.defineProperty(
		typesByRequestFolderName,
		type.requestFolderName,
		{
			value: type,
			enumerable: true
		});
});

Object.defineProperty(PCComponentTypes,
	'byRequestFolderName',
	{
		value: typesByRequestFolderName,
		enumerable: false
	});

export default PCComponentTypes;