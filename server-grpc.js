var grpc = require('grpc');

// app-specific configuration
var service = grpc.load(__dirname + '/fluidcal-plugin.proto').fluidcal.FluidCalPlugin.service;

exports.start = function startServer(host, serverMethods) {
  console.log('starting GRPC server...');

  function wrapMethod(fct){
    return function(call, callback) {
      console.log('[GRPC] call to', fct.name, ':', call.request);
      return fct.apply(this, arguments);
    };
  }

  var methods = {};

  Object.keys(serverMethods).forEach(function(name){
    console.log(' - /' + name);
    methods[name] = wrapMethod(serverMethods[name]);
  });

  var server = new grpc.Server();
  server.addProtoService(service, methods);
  server.bind(host, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('GRPC server running on', host);
};
