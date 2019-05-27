const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
    capabilities: [
        {
            browserName: "firefox"
        }
    ]
}, { clone: false });
