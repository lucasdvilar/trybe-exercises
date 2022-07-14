import User from '../interfaces/User';
import UserModel from '../models/user';

const getAll = async (): Promise<User[]> => {
    const users = await UserModel.getAll();
    return users;
};

const getById = async (id:string): Promise<User> => {
    const user = await UserModel.getById(id);
    return user;
};

const create = async (user: User): Promise<User> => {
    const createdUser = await UserModel.create(user);
    return createdUser;
};

const update = async (id: string, user: User) => {
    // it should check if the user exists
    return UserModel.update(id, user);
};

const remove = async (id: string) => {
    return UserModel.remove(id);
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
