const Produtos = require('../models/produtos');
const status = require('http-status');
 
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const quantemEstoque = req.body.quantemEstoque;
    const ativo = req.body.ativo;
 
    Produtos.create({
        nome: nome,
        descricao: descricao,
        preco: preco,
        quantemEstoque: quantemEstoque,
    })
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
exports.SelectAll = (req, res, next) => {
    Produtos.findAll()
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Produtos.findByPk(id)
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};