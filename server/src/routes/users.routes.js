
import express from "express"
import { controllers } from "../controller/index.js";
import { check } from "express-validator";


const router =  express.Router()
router.post('/register',[
  check('name','The name is required').not().isEmpty(),
  check('email','The email is required').isEmail(),
  check('password','The password is required').isLength( {min:6} ),
], controllers.userRegister )
.post('/login',[
  check('email','The email is required').isEmail(),
  check('password','The password is required').isLength( {min:6} )],controllers.userLogin)


export default router;

