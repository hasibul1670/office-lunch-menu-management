import prisma from '../../../shared/prisma';
import { IMenu } from './menu.interface';

const createMenu = async (payload: IMenu) => {
  const { date, menuName, option_details } = payload;
  const result = await prisma.menu.create({
    data: {
      date,
      menuName,
      option_details,
    },
  });
  return result;
};

const getAllMenu = async () => {
  const res = await prisma.menu.findMany({});
  return res;
};

const getSingleMenu = async (id: number) => {
  const result = await prisma.menu.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateMenu = async (payload: any, id: any) => {
  const result = await prisma.menu.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteMenu = async (id: number) => {
  const result = await prisma.menu.delete({
    where: {
      id,
    },
  });
  return result;
};

export const MenuService = {
  createMenu,
  getSingleMenu,
  getAllMenu,
  updateMenu,
  deleteMenu,
};
