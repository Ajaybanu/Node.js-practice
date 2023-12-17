import express from "express"


//routing
const router = express.Router();

//register  // method post
router.post("/register",registerController);

//login 
router.post("/login",loginController);

export default router;