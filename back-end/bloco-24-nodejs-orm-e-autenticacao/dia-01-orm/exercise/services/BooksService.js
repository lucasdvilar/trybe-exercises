const { Book } = require('../models');

const getAll = async () => {
    const books = await Book.findAll();
    return books;
};

const getById = async (id) => {
    const book = await Book.findByPk(id);
    if (!book) return { error: { code: 404, message: 'Book not found!' } };
    return book;
};

const create = async (title, author, pageQuantity) => {
    const book = await Book.create({ title, author, pageQuantity });
    return book;
};

const update = async (id, title, author, pageQuantity) => {
    const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id } });
    if (!updatedBook) return { error: { code: 404, message: 'Book not found!' } };
    return { message: 'Book updated!' };
};

const remove = async (id) => {
    await Book.destroy({ where: { id } });
    return { message: 'Book deleted!' };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
