import { Router } from "express";
import * as controllerImage from "./controllerImage.js";

// // eslint-disable-next-line new-cap
export const router = Router();

router.route("/").get(controllerImage.getAllImage);

router.route("/:id")
  .get(controllerImage.getByImageId)
//   .patch(controllerUser.UpdateUser)
//   .put(controllerUser.UpdateUser)
//   .delete(controllerUser.UserDelete);
