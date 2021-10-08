import express from 'express'
import {authUser,getUserProfile,createUser,updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleWare.js'
const router = express.Router()


/*
For protected routes, we need to make sure that the route is authorized. 
To do this we add a middleware called to protect ( a custom function in middleware) 
to get the token for the user and verify if the user is authorized or not.
*/
router.post('/login',authUser) // this is a post request hooked to /api/users and  /login is added to the hooked route
router.route('/').post(createUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile) // the same route we append put request for update user profile.
export default router //authUser is an async function written un usercontroller.js