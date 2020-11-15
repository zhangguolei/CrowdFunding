const config = require('config');

module.exports = {
    serverRuntimeConfig: {},

    publicRuntimeConfig: {
        infuraUrl: config.get('infuraUrl'),
    },
};