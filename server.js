var serverMethods = require('./server-methods'); // implementation of methods

var grpcServer = require('./server-grpc') // start grpc server (plugin API endpoint)
var httpServer = require('./server-http') // start http server (plugin API endpoint + web resources)

var GRPC_HOST = '0.0.0.0:50051';
var HTTP_PORT = process.env.PORT || 3000;

grpcServer.start(GRPC_HOST, serverMethods);
httpServer.start(HTTP_PORT, serverMethods);
