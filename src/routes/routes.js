const express = require('express');
const ProdutosController = require ('../controllers/produtosController.js');
const router = express.Router();
 
router.post('/produtos', ProdutosController.Insert);
router.get('/produtos', ProdutosController.SelectAll);
router.get('/produtos/:id', ProdutosController.SelectDetail);
 
module.exports = router;