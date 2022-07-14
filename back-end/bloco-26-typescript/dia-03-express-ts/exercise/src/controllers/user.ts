import { Request, Response } from "express";
// import User from "../interfaces/User";
import UserService from '../services/user';

const getAll = async (_req: Request, res: Response) => {
    const users = await UserService.getAll();
    res.status(200).json(users);
};

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserService.getById(id);
    res.status(200).json(user);
};

const create = async (req: Request, res: Response) => {
    const user = req.body;
    const createdUser = await UserService.create(user);
    res.status(201).json(createdUser);
};

const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body;
    await UserService.update(id, user);
    res.status(204).end();
};

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    await UserService.remove(id);
    res.status(200).json({ message: 'Deleted!' });
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
