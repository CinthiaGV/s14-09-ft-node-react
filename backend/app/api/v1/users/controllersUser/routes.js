import  { Router } from "express";
import * as controllerUser from "./controllerUser.js";
import multer from "multer";

const uploader = multer({ dest: 'uploads/' });

export const router = Router();

router.route("/").get(controllerUser.getAllUser);

router
.route("/:id")
.get(controllerUser.getUserById)
.patch(controllerUser.UpdateUser)
.put(controllerUser.UpdateUser)
.delete(controllerUser.UserDelete);

router.route(
  '/images/single').post(
    uploader.single('imagenProfile'), controllerUser.updateImageCloudinary)

router.route("/:username").get(controllerUser.getUserByUsername);
