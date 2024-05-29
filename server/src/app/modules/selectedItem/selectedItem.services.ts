import prisma from '../../../shared/prisma';

const createSelectedItem = async (payload: ISelectedItem) => {
  const { date, ...others } = payload;
  const result = await prisma.choice.create({
    data: {
      date,
      ...others,
    },
  });
  return result;
};

const getAllSelected = async () => {
  const res = await prisma.choice.findMany({});
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
