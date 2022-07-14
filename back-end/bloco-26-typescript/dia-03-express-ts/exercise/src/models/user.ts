import connection from './connection';
import User from '../interfaces/User';
import { ResultSetHeader } from 'mysql2/promise';

const getAll = async (): Promise<User[]> => {
    const [users] = await connection.execute('SELECT * FROM Users');
    return users as User[];
};

const getById = async (id:string): Promise<User> => {
    const [rows] = await connection.execute('SELECT * FROM Users WHERE id = ?', [id])
    const [user] = rows as User[];
    return user;
};

const create = async (user: User): Promise<User> => {
    const { name, email, password } = user;
    const [createdUser] = await connection.execute<ResultSetHeader>('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return { id: createdUser.insertId, ...user };
};

const update = async (id: string, user: User) => {
    const { name, email, password } = user;
    await connection.execute('UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
};

const remove = async (id: string) => {
    await connection.execute('DELETE FROM Users WHERE id = ?', [id]);
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
