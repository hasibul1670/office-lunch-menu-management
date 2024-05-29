import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get(
  '/',
  //  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getAllUser,
);
router.post('/create-user', UserController.createUser);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;
