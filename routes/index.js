const express = require('express'); 

const homeController = require('../controllers/homeController');
const registerController = require('../controllers/registerController');
const projectsController = require('../controllers/projectsController');

const router = express.Router();

// rotas 

// home
router.get('/', homeController.index)

// cadastrar novo projeto
router.get('/register', registerController.register);
router.post('/register', registerController.registerAction);


// lista projetos
router.get('/projects', projectsController.index)

// ver projeto
router.get('/projects/:slug', (req, res) => {
    let slug = req.params.slug;

    res.send('ID do projeto: ' + slug)
});


module.exports = router;