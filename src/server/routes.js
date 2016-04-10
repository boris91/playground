import db from './db';

export default {

	'/product-types': (req, res) => {
		res.write(JSON.stringify(db.product.types));
		res.end();
	},

	'/product-items': (req, res) => {
		res.write(JSON.stringify(db.product.items));
		res.end();
	}

};