const path = require('path');

module.exports = {
	typescript:true,
	outDir: path.join(__dirname,'/src/icon-components'),
	svgoConfig : {
		plugins:['preset-default']
	}
}