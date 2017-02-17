exports.getTaskSuggestions = function getTaskSuggestions(call, callback) {
  console.log('getTaskSuggestions', call.request);
  callback(null, {
    tasks: [
    ],
  });
};
