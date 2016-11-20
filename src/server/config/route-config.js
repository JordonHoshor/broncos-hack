(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const spheroRoutes = require('../routes/sphero-routes');
    // *** register routes *** //
    app.use('/sphero', spheroRoutes);
    app.use('/', routes);
  };

})(module.exports);
