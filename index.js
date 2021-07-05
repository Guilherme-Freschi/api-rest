const express = require('express');
const router = express.Router();
const index = express();// inicializando o servidor de
const rotaProdutos = require('./routes/produtos');

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Deu Certo'
    });
});

index.use('./produtos', rotaProdutos);
console.log('index');
module.exports = index;