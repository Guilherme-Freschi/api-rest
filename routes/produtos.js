const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// let db = [
//   {'1': {Nome: 'Cliente 1', Idade: '20'} },
//   {'2': {Nome: 'Cliente 2', Idade: '20'} },
//   {'3': {Nome: 'Cliente 3', Idade: '20'} }
// ];

router.get('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) { return res.status(500).send({ error: error }) }
      conn.query(
            'SELECT* FROM produtos;',
            (error, resultado, fields) => {
              if (error) { return res.status(500).send({ error: error }) }
            });
          })
        });

router.post('/add', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) { return res.status(500).send({ error: error }) }
    conn.query(
      'INSERT INTO produtos (nome, preco) VALUES (?,?)'
    [req.body.name, req.body.preco],
    (error, resultado, field) => {
      conn.release();
      if (error) {
        return res.status(500).send({
          error: error,
          response: null
        });
      }
        res.status(201).send({
        mensagem: 'insere um produto',
        id_produto: resultado.insertId
        });
      }
    )
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (!item[id]) {
      return item;
    }
  });

  db = newDB;
  res.status(200).json(newDB);
});

module.exports = router;


