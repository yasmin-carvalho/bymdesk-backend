import { User } from "@prisma/client";
import prismaClient from "../prisma";
import { hashSync } from "bcryptjs";

type UserCreate = Omit<User, "password">;

class UserService {
  async create(data: User): Promise<UserCreate> {
    const user = await prismaClient.user.create({
      data: { ...data, password: hashSync(data.password, 8) },
    });

    delete user.password;
    return user;
  }
}

export { UserService };
