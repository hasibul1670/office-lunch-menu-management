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
exports.MenuController = exports.sendMenuResponse = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const menu_services_1 = require("./menu.services");
const sendMenuResponse = (res, message, data) => {
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message,
        data,
    });
};
exports.sendMenuResponse = sendMenuResponse;
const createMenu = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_services_1.MenuService.createMenu(req.body);
    (0, exports.sendMenuResponse)(res, 'Menu created successfully', result);
}));
const getAllMenu = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield menu_services_1.MenuService.getAllMenu();
    (0, exports.sendMenuResponse)(res, 'Menu retrieval successfully', result);
}));
const getSingleMenu = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield menu_services_1.MenuService.getSingleMenu(Number(id));
    (0, exports.sendMenuResponse)(res, 'Menu retrieval successfully', result);
}));
const updateMenu = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield menu_services_1.MenuService.updateMenu(req.body, Number(id));
    (0, exports.sendMenuResponse)(res, 'Menu updated successfully', result);
}));
const deleteMenu = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield menu_services_1.MenuService.deleteMenu(Number(id));
    (0, exports.sendMenuResponse)(res, 'Menu delete successfully', result);
}));
exports.MenuController = {
    createMenu,
    getSingleMenu,
    getAllMenu,
    updateMenu,
    deleteMenu,
};
