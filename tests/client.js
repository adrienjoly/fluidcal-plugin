var HOST = 'localhost:50051'; // or something like '0.tcp.ngrok.io:17802'

var readline = require('readline');
var grpc = require('grpc');
var protocol = grpc.load(__dirname + '/../fluidcal-plugin.proto').fluidcal;

console.log('host:', HOST);
var client = new protocol.FluidCalPlugin(HOST, grpc.credentials.createInsecure());

console.log('calling getTaskSuggestions ...');
client.getTaskSuggestions({ userSession: null, selectedDateTime: null }, function(err, response) {
  if (err) throw err;
  console.log('=> suggested tasks:', response.tasks);
});
