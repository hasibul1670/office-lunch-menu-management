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
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const user_utils_1 = require("./user.utils");
const createUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, username, role } = req.body;
    const hashPassword = yield (0, user_utils_1.hashedPassword)(password);
    const existingUser = yield prisma_1.default.user.findFirst({
        where: { email },
    });
    if (existingUser) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'User with this email already exists!');
    }
    const result = yield prisma_1.default.user.create({
        data: {
            email,
            password: hashPassword,
            username,
            role,
        },
    });
    return result;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany();
    return result;
});
const getSingleUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prisma_1.default.user.findUnique({
        where: {
            id: authUser.userId,
        },
    });
    return userData;
});
const updateUser = (authUser, req) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prisma_1.default.user.findUnique({
        where: {
            id: authUser.userId,
        },
    });
    if (!userData) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User does not exists!');
    }
    let profileData = yield prisma_1.default.user.update({
        where: {
            id: authUser.userId,
        },
        data: req.body,
    });
    return profileData;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.UserServices = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
