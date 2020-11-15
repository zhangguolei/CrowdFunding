const routes = require('next-routes')();

routes
    .add('/', '/index')
    .add('/projects/create', 'projects/create')
    .add('/projects/:address', 'projects/detail')
    .add('/projects/:address/payments/create', 'projects/payments/create');

module.exports = routes;