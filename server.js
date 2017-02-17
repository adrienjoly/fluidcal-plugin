var grpc = require('grpc');

// app-specific configuration
var service = grpc.load(__dirname + '/fluidcal-plugin.proto').fluidcal.FluidCalPlugin.service;
var serverMethods = require('./server-methods'); // implementation of methods

function wrapMethod(fct){
  return function(call, callback) {
    console.log('received call to', fct.name, ':', call.request);
    return fct.apply(this, arguments);
  };
}

var methods = {};

Object.keys(serverMethods).forEach(function(name){
  console.log(' - /' + name);
  methods[name] = wrapMethod(serverMethods[name]);
});

function startServer(host) {
  console.log('start RPC server...');
  var server = new grpc.Server();
  server.addProtoService(service, methods);
  server.bind(host, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('server running on', host);
}

startServer('0.0.0.0:50051');
