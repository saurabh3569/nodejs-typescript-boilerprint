import express from "express";
import { getUser, login, register } from "../controllers/auth.controller.";
import { authSchemas } from "../validation/auth.validation";
import validateRequest from "../middleware/validate";
import { protect } from "../middleware/auth.middleware";
import { get } from "http";

const router = express.Router();

router.post("/register", validateRequest(authSchemas.register), register);
router.post("/login", validateRequest(authSchemas.login), login);
router.get("/", protect, getUser);

export default router;
