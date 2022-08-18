import { Router } from "express";
import userRoutes from "./userRoutes";
import loginRoutes from "./LoginRoutes";
import * as userController from "../controller/userController";
// import contactRoutes from "./contactRoutes";
// import auth from "../middlewares/authenticate";

const router = Router();
router.post("/register", userController.createUser);
router.use("/login", loginRoutes);
// router.use(auth);
router.use('/users', userRoutes);   

// protected route
// router.use("/contact", contactRoutes);

export default router;