var express = require('express');

exports.start = function startServer(port, serverMethods) {
  console.log('starting HTTP server...');

  var app = express();

  app.use(express.static('public'));
  app.use(express.static('node_modules'));

  Object.keys(serverMethods).forEach(function(name){
    console.log(' - /' + name);
    app.get('/' + name, function(req, res) {
      var call = {
        request: req.query,
      };
      console.log('[HTTP] call to', name, ':', req.query);
      serverMethods[name](call, function(err, data) {
        res.json(err || data);
      });
    });
  });

  app.listen(port, function () {
    console.log('HTTP server running on', port);
  });
};
