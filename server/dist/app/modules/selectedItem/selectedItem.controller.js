"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedItemController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const menu_controller_1 = require("../menu/menu.controller");
const selectedItem_services_1 = require("./selectedItem.services");
const createSelectedItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selectedItem_services_1.SelectedItemService.createSelectedItem(req.body);
    (0, menu_controller_1.sendMenuResponse)(res, 'Selected Item created successfully', result);
}));
const getAllSelectedItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selectedItem_services_1.SelectedItemService.getAllSelected();
    (0, menu_controller_1.sendMenuResponse)(res, 'Retrieved all Items successfully', result);
}));
const getSingleSelectedItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield selectedItem_services_1.SelectedItemService.getSingleSelectedItem(Number(id));
    (0, menu_controller_1.sendMenuResponse)(res, 'Menu retrieval successfully', result);
}));
const updateSelectedItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield selectedItem_services_1.SelectedItemService.updateSelectedItem(req.body, Number(id));
    (0, menu_controller_1.sendMenuResponse)(res, 'Menu updated successfully', result);
}));
const deleteSelectedItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield selectedItem_services_1.SelectedItemService.deleteSelectedItem(Number(id));
    (0, menu_controller_1.sendMenuResponse)(res, 'Menu delete successfully', result);
}));
exports.SelectedItemController = {
    createSelectedItem,
    getAllSelectedItem,
    getSingleSelectedItem,
    updateSelectedItem,
    deleteSelectedItem,
};
