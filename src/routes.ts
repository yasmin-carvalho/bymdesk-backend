import { Request, Response, Router } from "express";
import { UserController } from "./Controllers/UserController";

const router = Router();

const userController = new UserController();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hellow world" });
});

router.post("/users", userController.create);

export { router };
