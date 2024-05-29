import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IMenu } from './menu.interface';
import { MenuService } from './menu.services';

export const sendMenuResponse = (res: Response, message: string, data: any) => {
  sendResponse<IMenu>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message,
    data,
  });
};

const createMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await MenuService.createMenu(req.body);
  sendMenuResponse(res, 'Menu created successfully', result);
});
const getAllMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await MenuService.getAllMenu();
  sendMenuResponse(res, 'Menu retrieval successfully', result);
});

const getSingleMenu = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MenuService.getSingleMenu(Number(id));
  sendMenuResponse(res, 'Menu retrieval successfully', result);
});

const updateMenu = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MenuService.updateMenu(req.body,Number(id));
  sendMenuResponse(res, 'Menu updated successfully', result);
});
const deleteMenu = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MenuService.deleteMenu(Number(id));
  sendMenuResponse(res, 'Menu delete successfully', result);
});

export const MenuController = {
  createMenu,
  getSingleMenu,
  getAllMenu,
  updateMenu,
  deleteMenu,
};
