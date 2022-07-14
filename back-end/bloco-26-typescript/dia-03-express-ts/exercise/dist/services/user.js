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
const user_1 = __importDefault(require("../models/user"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.getAll();
    return users;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.getById(id);
    return user;
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield user_1.default.create(user);
    return createdUser;
});
const update = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    // it should check if the user exists
    return user_1.default.update(id, user);
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.default.remove(id);
});
exports.default = {
    getAll,
    getById,
    create,
    update,
    remove,
};
