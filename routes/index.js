const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world')
})

router.get('/register', (req, res) => {
    res.send('hello world')
})

router.get('/projects', (req, res) => {
    res.send('hello world')
})

router.get('/projects/:id', (req, res) => {
    let id = req.params.id;

    res.send('ID do projeto: ' + id)
})


module.exports = router;