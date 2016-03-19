export default class ItemType {
	constructor(label = '', requestFolderName = '') {
		Object.assign(this, {
			label,
			requestFolderName
		});
	}
};