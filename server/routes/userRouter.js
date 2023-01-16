const Router = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/signin', userController.signin);
router.post('/login', userController.login);
router.get('/check-auth', authMiddleware, userController.checkAuth);

module.exports = router;