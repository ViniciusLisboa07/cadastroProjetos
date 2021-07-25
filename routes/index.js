const express = require('express'); 

const homeController = require('../controllers/homeController');
const registerController = require('../controllers/registerController');

const router = express.Router();

// rotas 

// home
router.get('/', homeController.index)

// cadastrar novo projeto
router.get('/register', registerController.register);
router.post('/register', registerController.registerAction);

// lista projetos
router.get('/projects', (req, res) => {
    res.send('hello world')
})

// ver projeto
router.get('/projects/:id', (req, res) => {
    let id = req.params.id;

    res.send('ID do projeto: ' + id)
});


module.exports = router;