var trelloChecklists = require('../lib/trello-checklists')

trelloChecklists
  .getNextSteps('57a481755ab2c09495ba5c3b')
  .then((checklists) => {
    console.log('\n========')
    console.log('\nNext step for each checklist of each card:')
    checklists
      .forEach((chkList) => {
        console.log([ chkList.card.name, chkList.checklist.name, chkList.nextStep ].join(' -- '))
      })
  })
