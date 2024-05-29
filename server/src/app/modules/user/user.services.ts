import { Request } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { hashedPassword } from './user.utils';

const createUser = async (req: Request) => {
  const { email, password, username, role } = req.body;

  const hashPassword = await hashedPassword(password);
  const existingUser = await prisma.user.findFirst({
    where: { email },
  });
  if (existingUser) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'User with this email already exists!',
    );
  }

  const result = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
      username,
      role,
    },
  });

  return result;
};

const getAllUser = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (authUser: any) => {
  const userData = await prisma.user.findUnique({
    where: {
      id: authUser.userId,
    },
  });

  return userData;
};

const updateUser = async (authUser: any, req: Request) => {
  const userData = await prisma.user.findUnique({
    where: {
      id: authUser.userId,
    },
  });
  if (!userData) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exists!');
  }
  let profileData = await prisma.user.update({
    where: {
      id: authUser.userId,
    },
    data: req.body,
  });

  return profileData;
};

const deleteUser = async (id: number) => {
  console.log('--------------->',id)
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UserServices = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
