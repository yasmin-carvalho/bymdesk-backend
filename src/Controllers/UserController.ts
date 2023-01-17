import { User } from "@prisma/client";
import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { ApiError } from "../validators/Exceptions/ApiError";
import { UserValidator } from "../validators/UserValidator/UserValidator";

class UserController {
  async create(req: Request, res: Response) {
    const data: User = req.body;

    const validator = new UserValidator();
    try {
      await validator.createValidator().validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      throw new ApiError(400, error.message || error);
    }
    if (await validator.emailExist(data.email))
      throw new ApiError(400, "User already exists");

    const userService = new UserService();
    const user = await userService.create(data);
    res.status(201).json(user);
  }
}

export { UserController };
