import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';

import { sendMenuResponse } from '../menu/menu.controller';
import { SelectedItemService } from './selectedItem.services';

const createSelectedItem = catchAsync(async (req: Request, res: Response) => {
  const result = await SelectedItemService.createSelectedItem(req.body);
  sendMenuResponse(res, 'Selected Item created successfully', result);
});

const getAllSelectedItem = catchAsync(async (req: Request, res: Response) => {
  const result = await SelectedItemService.getAllSelected();
  sendMenuResponse(res, 'Retrieved all Items successfully', result);
});

const getSingleSelectedItem = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SelectedItemService.getSingleSelectedItem(Number(id));
    sendMenuResponse(res, 'Menu retrieval successfully', result);
  },
);

const updateSelectedItem = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SelectedItemService.updateSelectedItem(
    req.body,
    Number(id),
  );
  sendMenuResponse(res, 'Menu updated successfully', result);
});

const deleteSelectedItem = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SelectedItemService.deleteSelectedItem(Number(id));
  sendMenuResponse(res, 'Menu delete successfully', result);
});

export const SelectedItemController = {
  createSelectedItem,
  getAllSelectedItem,
  getSingleSelectedItem,
  updateSelectedItem,
  deleteSelectedItem,
};
