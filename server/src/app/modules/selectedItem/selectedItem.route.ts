import express from 'express';
import { SelectedItemController } from './selectedItem.controller';

const router = express.Router();
router.post('/create-selectedItem', SelectedItemController.createSelectedItem);
router.get('/all-selectedItem', SelectedItemController.getAllSelectedItem);
router.get('/:id', SelectedItemController.getSingleSelectedItem);
router.patch('/:id', SelectedItemController.updateSelectedItem);
router.delete('/:id', SelectedItemController.deleteSelectedItem);

export const SelectedItemRoutes = router;
