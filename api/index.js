const api = require('./_lib/api.js');

module.exports = (req, res) => {
	res.json(api('root'));
};
