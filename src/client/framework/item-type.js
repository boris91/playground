export default class ItemType {
	constructor(label = '', requestFolderName = '') {
		Object.assign(this, {
			label,
			shortName: label.toLowerCase(),
			requestFolderName
		});
	}
};