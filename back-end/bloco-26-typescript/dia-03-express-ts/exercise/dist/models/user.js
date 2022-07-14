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
const connection_1 = __importDefault(require("./connection"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const [users] = yield connection_1.default.execute('SELECT * FROM Users');
    return users;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield connection_1.default.execute('SELECT * FROM Users WHERE id = ?', [id]);
    const [user] = rows;
    return user;
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = user;
    const [createdUser] = yield connection_1.default.execute('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return Object.assign({ id: createdUser.insertId }, user);
});
const update = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = user;
    yield connection_1.default.execute('UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.execute('DELETE FROM Users WHERE id = ?', [id]);
});
exports.default = {
    getAll,
    getById,
    create,
    update,
    remove,
};
