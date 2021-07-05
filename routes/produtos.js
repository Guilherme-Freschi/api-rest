const express = require('express');
const router = express.Router();

let db = [
  {'1': {Nome: 'Cliente 1', Idade: '20'} },
  {'2': {Nome: 'Cliente 2', Idade: '20'} },
  {'3': {Nome: 'Cliente 3', Idade: '20'} }
]

router.get('/', (req, res, next) => {
  res.status(200).json(db);
});

router.post('/add', (req, res, next) => {
  const body = req.body;

  if(!body) {
    res.status(400).end();
    return;
  }

  db.push(body);
  res.status(200).json(body);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (!item[id]) {
      return item
    }
  });

  db.push(body);
  res.status(200).json(body);
});


router.delete('/:id', (req, res) => {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (!item[id]){
      return item;
    }
  })

  db = newDB;
  res.status(200).json(newDB);
  // return;
})

module.exports = router;


