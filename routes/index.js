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
router.get('/projects/:slug', projectsController.slug);


module.exports = router;