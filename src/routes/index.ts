import { Router } from "express";
import userRoutes from "./userRoutes";

import * as userController from "../controller/userController";
import * as loginController from "../controller/LoginController";
import   contactRoutes from "./ContactRoutes";
import authenticate from "../middlewares/authenticate";

const router = Router();
router.post("/register", userController.createUser);
// router.use("/login", loginRoutes);

router.post('/login',loginController.loginUser);

router.use(authenticate);
router.use('/users', userRoutes); 
// protected route
router.use("/contact", contactRoutes);

export default router;