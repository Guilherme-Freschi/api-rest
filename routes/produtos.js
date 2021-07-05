const express = require('express');
const router = express.Router();

// router.get('/', (req, res, next) => {
//      res.status(200).send ({ 
//          messagem: 'Usando GET dentro da rota de produtos'
//      });
//  });

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Deu Certo'
    });
});

  router.post('/', (req, res, next) => {
      res.status(201).send({ 
          message: 'Usando o POST dentro da roa de produtos'
      });
  });

console.log('produtos');

module.exports = router;


