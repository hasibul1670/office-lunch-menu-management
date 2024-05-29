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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedItemService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createSelectedItem = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, menuId, date } = payload, others = __rest(payload, ["userId", "menuId", "date"]);
    const existingSelection = yield prisma_1.default.choice.findFirst({
        where: {
            userId,
            date,
        },
    });
    if (existingSelection) {
        throw new ApiError_1.default(409, 'You already selected lunch menu for today !');
    }
    const result = yield prisma_1.default.choice.create({
        data: Object.assign({ userId,
            menuId,
            date }, others),
    });
    return result;
});
const getAllSelected = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma_1.default.choice.findMany({
        include: {
            menu: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    role: true,
                    email: true,
                },
            },
        },
    });
    return res;
});
const getSingleSelectedItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.choice.findUnique({
        where: {
            id,
        },
        include: {
            menu: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    role: true,
                    email: true,
                },
            },
        },
    });
    return result;
});
const updateSelectedItem = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.choice.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteSelectedItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.choice.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.SelectedItemService = {
    createSelectedItem,
    getAllSelected,
    getSingleSelectedItem,
    updateSelectedItem,
    deleteSelectedItem,
};
