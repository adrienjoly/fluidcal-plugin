var trelloChecklists = require('./lib/trello-checklists')

const TRELLO_BOARD_ID = '57a481755ab2c09495ba5c3b' // TODO

const DEFAULT_DURATION = { seconds: 30 * 60, nanos: 0 }

/*
var DUMMY_TASKS = [
  {
    name: 'Task 1',
    duration: DEFAULT_DURATION,
  },
  {
    name: 'Task 2',
    duration: DEFAULT_DURATION,
  },
]
*/

const translateToTask = (nextStep) => ({
  duration: DEFAULT_DURATION,
  name: [
    nextStep.card.name,
    nextStep.checklist.name,
    nextStep.nextStep
  ].join(' -- '), // TODO: better formating, or separate properties
})

exports.getTaskSuggestions = function getTaskSuggestions(call, callback) {
  console.log('getTaskSuggestions', call.request)
  trelloChecklists
    .getNextSteps(TRELLO_BOARD_ID)
    .then((nextSteps) => nextSteps.map(translateToTask))
    .then((tasks) =>
      callback(null, { tasks: tasks })
    )
}
