"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRoutes = void 0;
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("./menu.controller");
const router = express_1.default.Router();
router.post('/create-menu', 
// auth(ENUM_USER_ROLE.ADMIN),
menu_controller_1.MenuController.createMenu);
router.get('/all-menu', menu_controller_1.MenuController.getAllMenu);
router.get('/:id', menu_controller_1.MenuController.getSingleMenu);
router.patch('/:id', menu_controller_1.MenuController.updateMenu);
router.delete('/:id', menu_controller_1.MenuController.deleteMenu);
exports.MenuRoutes = router;
