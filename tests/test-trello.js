var Trello = require('trello')
var trello = new Trello(process.env.TRELLO_KEY.substr(), process.env.TRELLO_TOKEN.substr())

const PRINT_LOAD_PROGRESS = true

// api: https://github.com/norberteder/trello/blob/master/main.js

const logNamesAndIds = (err, item) => console.log('=>', err || item.map((i) => [ i.name, i.id ]))

//trello.getBoards('adrienjoly', logNamesAndIds)
//trello.getCardsOnBoard('57a481755ab2c09495ba5c3b', logNamesAndIds)



trello.getCardsOnBoard('57a481755ab2c09495ba5c3b')
  .then((cards) => cards.map((card) =>
    trello.getChecklistsOnCard(card.id)
      .then((checklists) => {
        // print the card and its checklists
        if (PRINT_LOAD_PROGRESS && checklists.length) {
          console.log('\n', card.name)
          checklists.forEach((checklist) => {
            console.log('\n  -', checklist.name + '\n')
            checklist.checkItems.forEach((item) =>
              console.log('    -', item.name)
            )
          })
        }
        // return the card and its checklists
        return {
          card: card,
          checklists: checklists, // Sort them, and sort their items
        }
      })
    )
  )
  .then((fetchers) => Promise.all(fetchers))
  .then((checklists) => {
    console.log('\n========')
    console.log('\nNext task for each card:')
    checklists
      .filter((chkList) => chkList.checklists.length) // keep only cards with checklists
      .forEach((chkList) => {
        console.log('\n' + chkList.card.name)
        chkList.checklists.map((checklist) => {
          console.log('  -', checklist.name, ':', checklist.checkItems[0].name)
        })
      })
  })
