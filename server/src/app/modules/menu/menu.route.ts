import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { MenuController } from './menu.controller';

const router = express.Router();
router.post(
  '/create-menu',
  // auth(ENUM_USER_ROLE.ADMIN),
  MenuController.createMenu,
);

router.get('/all-menu', MenuController.getAllMenu);
router.get('/:id', MenuController.getSingleMenu);
router.patch('/:id', MenuController.updateMenu);
router.delete('/:id', MenuController.deleteMenu);

export const MenuRoutes = router;
