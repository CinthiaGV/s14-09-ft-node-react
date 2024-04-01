import { prisma } from "../../../database.js";
import { signToken } from "../auth.js";

import { encryptPassword, verifyPassword } from "./model.js";

export const signup = async (req, res, next) => {
  res.json({
    result: "ok sign up",
  });
};

export const signin = async (req, res, next) => {
  res.json({
    result: "ok sign up",
  });
};

export const id = async (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;

  try {
    const result = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (result === null) {
      next({ message: "User not found", status: 404 });
    } else {
      req.result = result;
      next();
    }
  } catch (error) {
    next(error);
  }
};

export const all = (req, res) => {
  res.json({
    data: [],
  });
};

export const read = (req, res, next) => {
  res.json({
    data: req.result,
  });
};
export const update = (req, res) => {
  res.json({
    data: {},
  });
};
export const remove = (req, res) => {
  res.status(204);
  res.end();
};

export const changePassword = async (req, res, next) => {
  const { body = {}, decoded = {} } = req;
  const { id } = decoded;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        password: true,
      },
    });

    const passwordMatch = await verifyPassword(body.oldPassword, user.password);

    if (!passwordMatch) {
      return next({
        message: "Invalid old password",
        status: 400,
      });
    }

    const newPassword = await encryptPassword(body.newPassword);

    const result = await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: newPassword,
      },
    });

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
