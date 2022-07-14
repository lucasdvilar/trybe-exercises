"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const router = (0, express_1.Router)();
router.get('/users', user_1.default.getAll);
router.get('/users/:id', user_1.default.getById);
router.post('/users', user_1.default.create);
router.put('/users/:id', user_1.default.update);
router.delete('/users/:id', user_1.default.remove);
exports.default = router;
