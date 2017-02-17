var Trello = require('trello')
var trello = new Trello(process.env.TRELLO_KEY.substr(), process.env.TRELLO_TOKEN.substr())

// api: https://github.com/norberteder/trello/blob/master/main.js

const logNamesAndIds = (err, item) => console.log('=>', err || item.map((i) => [ i.name, i.id ]))

//trello.getBoards('adrienjoly', logNamesAndIds)
//trello.getCardsOnBoard('57a481755ab2c09495ba5c3b', logNamesAndIds)
trello.getCardsOnBoard('57a481755ab2c09495ba5c3b')
  .then((cards) => [
    new Promise((resolve, reject) => { console.log('a'); resolve() }),
    new Promise((resolve, reject) => { console.log('b'); resolve() }),
  ])
  .then((fetchList) => Promise.all(fetchList))
  .then(() => console.log('done.'))
