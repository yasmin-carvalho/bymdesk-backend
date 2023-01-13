-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('MANUTENCAO_TI', 'MANUTENCAO_ELETRICA', 'MANUTENCAO_PREDIAL', 'OUTROS');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ANALYST', 'CLIENT', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "matriculation" CHAR(10) NOT NULL,
    "responsible_sector" "Sector" NOT NULL DEFAULT 'OUTROS',
    "role" "Role" NOT NULL DEFAULT 'CLIENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
