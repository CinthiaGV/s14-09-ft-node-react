import { Router } from "express";
import * as controller from "./controller.js";
import { auth } from "../auth.js";
import { upload } from "../../uploadsFiles/uploads.js";

// eslint-disable-next-line new-cap
export const router = Router();
/**
 * /api/v1/users POST - Create a new user
 * /api/v1/users GET - Get all users
 *
 *
 */

router.route("/signup").post(controller.signup);
router.route("/signin").post(controller.signin);
router.route("/changePassword").put(auth, controller.changePassword);
router.route("/filter").get(controller.filter);
router.route("/myProfile").get(auth, controller.myProfile);
router
  .route("/updateProfile")
  .put(auth, upload.array("imageProfile"), controller.updateProfile);
router
  .route("/updateProfile")
  .patch(auth, upload.array("imageProfile"), controller.updateProfile);
router.route("/list").get(auth, controller.list);

router.route("/getAll").get(controller.all);

router.param("id", controller.id);

router
  .route("/:id")
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.remove);
