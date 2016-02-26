'use strict';

var path = process.cwd();
var multer = require('multer');

var urlController = require(path + '/app/controllers/urlController.js');

module.exports = function (app) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		})
		.post(multer().single('upl'), function(req, res) {
			res.json(req.file.size + " <= The size of the chosen file.");
			res.status(204).end()
		});

};
