const express = require('express');

const homeController = require('../controllers/homeController');

const router = express.Router();

// rotas

// home
router.get('/', homeController.index)

// 
router.get('/register', (req, res) => {
    res.send('hello world')
})

// lista projetos
router.get('/projects', (req, res) => {
    res.send('hello world')
})

// ver projeto
router.get('/projects/:id', (req, res) => {
    let id = req.params.id;

    res.send('ID do projeto: ' + id)
})


module.exports = router;