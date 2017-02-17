var Trello = require('trello')
var trello = new Trello(process.env.TRELLO_KEY.substr(), process.env.TRELLO_TOKEN.substr())

// api: https://github.com/norberteder/trello/blob/master/main.js

const logNamesAndIds = (err, item) => console.log('=>', err || item.map((i) => [ i.name, i.id ]))

//trello.getBoards('adrienjoly', logNamesAndIds)
//trello.getCardsOnBoard('57a481755ab2c09495ba5c3b', logNamesAndIds)



trello.getCardsOnBoard('57a481755ab2c09495ba5c3b')
  .then((cards) => cards.map((card) =>
    trello.getChecklistsOnCard(card.id)
      .then((items) => items.length && {
        cardId: card.id,
        cardName: card.name,
        items: items,
      })
    )
  )
  .then((fetchers) => Promise.all(fetchers))
  .then((checklists) =>
    checklists
      .filter((chkList) => !!chkList)
      .forEach((chkList) => {
        console.log(chkList.cardName, chkList.items.map((item) => item.name))
      })
  )
