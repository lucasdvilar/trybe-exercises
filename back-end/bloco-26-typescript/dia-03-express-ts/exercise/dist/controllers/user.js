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
// import User from "../interfaces/User";
const user_1 = __importDefault(require("../services/user"));
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.getAll();
    res.status(200).json(users);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.getById(id);
    res.status(200).json(user);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const createdUser = yield user_1.default.create(user);
    res.status(201).json(createdUser);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.body;
    yield user_1.default.update(id, user);
    res.status(204).end();
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_1.default.remove(id);
    res.status(200).json({ message: 'Deleted!' });
});
exports.default = {
    getAll,
    getById,
    create,
    update,
    remove,
};
