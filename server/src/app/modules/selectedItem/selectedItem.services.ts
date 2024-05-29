import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createSelectedItem = async (payload: ISelectedItem) => {
  const { userId, menuId, date, ...others } = payload;

  const existingSelection = await prisma.choice.findFirst({
    where: {
      userId,
      date,
    },
  });

  if (existingSelection) {
    throw new ApiError(409, 'You already selected lunch menu for today !');
  }

  const result = await prisma.choice.create({
    data: {
      userId,
      menuId,
      date,
      ...others,
    },
  });

  return result;
};

const getAllSelected = async () => {
  const res = await prisma.choice.findMany({
    include: {
      menu: true,
      user: {
        select: {
          id: true,
          username: true,
          role: true,
          email: true,
        },
      },
    },
  });

  return res;
};

const getSingleSelectedItem = async (id: number) => {
  const result = await prisma.choice.findUnique({
    where: {
      id,
    },
    include: {
      menu: true,
      user: {
        select: {
          id: true,
          username: true,
          role: true,
          email: true,
        },
      },
    },
  });
  return result;
};

const updateSelectedItem = async (payload: any, id: any) => {
  const result = await prisma.choice.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteSelectedItem = async (id: number) => {
  const result = await prisma.choice.delete({
    where: {
      id,
    },
  });
  return result;
};
export const SelectedItemService = {
  createSelectedItem,
  getAllSelected,
  getSingleSelectedItem,
  updateSelectedItem,
  deleteSelectedItem,
};
