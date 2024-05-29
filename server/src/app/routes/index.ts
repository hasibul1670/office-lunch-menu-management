import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { MenuRoutes } from '../modules/menu/menu.route';
import { SelectedItemRoutes } from '../modules/selectedItem/selectedItem.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/menu',
    route: MenuRoutes,
  },
  {
    path: '/selectItem',
    route: SelectedItemRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
