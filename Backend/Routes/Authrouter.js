const { login, signup } = require('../Controllers/Authcontroller');
const { signupvalidatation, loginvalidatation } = require('../Middlewares/Authvalidation');


const router = require('express').Router();


router.post('/login',loginvalidatation, login)
router.post('/signup', signupvalidatation, signup )
module.exports = router;