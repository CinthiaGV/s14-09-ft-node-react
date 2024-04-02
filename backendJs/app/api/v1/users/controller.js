import { prisma } from "../../../database.js";
import { signToken } from "../auth.js";

import { encryptPassword, verifyPassword } from "./model.js";

export const signup = async (req, res, next) => {
  const { body = {} } = req;
  const { userData } = body;
  try {
    const password = await encryptPassword(userData.password);

    console.log(userData);
    const user = await prisma.user.create({
      data: {
        ...userData,
        password,
      },
    });

    res.status(201);
    res.json({
      data: user,
    });
  } catch (error) {
    next({
      message: "No se pudo crear el Usuario",
      status: 400,
      error,
    });
  }
};

export const signin = async (req, res, next) => {
  const { body = {} } = req;
  const { email, password } = body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user === null) {
      return next({
        message: "Invalid email or password",
        status: 401,
      });
    }

    const passwordMatch = await verifyPassword(password, user.password);

    if (!passwordMatch) {
      return next({
        message: "Invalid email or password",
        status: 401,
      });
    }

    const token = signToken({
      id: user.id,
      email: user.email,
    });

    res.json({
      data: {
        ...user,
        password: undefined,
      },
      meta: {
        token,
      },
    });
  } catch (error) {
    next(error);
  }
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
