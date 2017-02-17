exports.getTaskSuggestions = function getTaskSuggestions(call, callback) {
  console.log('getTaskSuggestions', call.request);
  callback(null, {
    tasks: [
      {
        name: 'Task 1',
        duration: { seconds: 30 * 60, nanos: 0 },
      },
      {
        name: 'Task 2',
        duration: { seconds: 45 * 60, nanos: 0 },
      },
    ],
  });
};
