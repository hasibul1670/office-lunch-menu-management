"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const selectedItem_controller_1 = require("./selectedItem.controller");
const router = express_1.default.Router();
router.post('/create-selectedItem', selectedItem_controller_1.SelectedItemController.createSelectedItem);
router.get('/all-selectedItem', selectedItem_controller_1.SelectedItemController.getAllSelectedItem);
router.get('/:id', selectedItem_controller_1.SelectedItemController.getSingleSelectedItem);
router.patch('/:id', selectedItem_controller_1.SelectedItemController.updateSelectedItem);
router.delete('/:id', selectedItem_controller_1.SelectedItemController.deleteSelectedItem);
exports.SelectedItemRoutes = router;
