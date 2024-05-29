"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get('/', 
//  auth(ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.getAllUser);
router.post('/create-user', user_controller_1.UserController.createUser);
router.delete('/:id', user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
