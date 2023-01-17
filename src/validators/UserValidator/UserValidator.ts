import { EnumRole, EnumSector } from "../../Enums";
import prismaClient from "../../prisma";
import * as yup from "yup";

class UserValidator {
  async idExist(id: number): Promise<boolean> {
    const user = await prismaClient.user.findFirst({
      where: { id },
    });
    return !!user;
  }
  async emailExist(email: string): Promise<boolean> {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });
    return !!user;
  }

  createValidator() {
    return yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().required("Email is required"),
      phone: yup.string().optional(),
      password: yup.string().required("Password is required"),
      matriculation: yup.string().optional(),
      responsible_sector: yup
        .mixed<keyof typeof EnumSector>()
        .oneOf(Object.values(EnumSector))
        .optional(),
      role: yup
        .mixed<keyof typeof EnumRole>()
        .oneOf(Object.values(EnumRole))
        .required("Role is required"),
    });
  }

  updateByIdValidator() {
    return yup.object().shape({
      id: yup.number().required("Id is required in params"),
      name: yup.string().optional(),
      email: yup.string().optional(),
      phone: yup.string().optional(),
      password: yup.string().optional(),
      matriculation: yup.string().optional(),
      responsible_sector: yup
        .mixed<keyof typeof EnumSector>()
        .oneOf(Object.values(EnumSector))
        .optional(),
      role: yup
        .mixed<keyof typeof EnumRole>()
        .oneOf(Object.values(EnumRole))
        .optional(),
    });
  }

  deleteByIdValidator() {
    return yup.object().shape({
      id: yup.number().required("Id is required in params"),
    });
  }

  getByIdValidator() {
    return yup.object().shape({
      id: yup.number().required("Id is required in params"),
    });
  }
}

export { UserValidator };
