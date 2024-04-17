import { Router } from "express";
import * as controllerUser from "./controllerUser.js";
// import { coleccionesPermitidas } from "../helpers/dbValidators.js";
// import { check } from "express-validator";

// eslint-disable-next-line new-cap
export const router = Router();


router.route("/").get(controllerUser.getAllUser);

router
.route("/:id")
.get(controllerUser.getUserById)
.patch(controllerUser.UpdateUser)
.put(controllerUser.UpdateUser)
.delete(controllerUser.UserDelete);

router.route(
  '/:upload/:id').put(
    upload.single('photo'), controllerUser.updateImageCloudinary)

router.route("/:username").get(controllerUser.getUserByUsername);
