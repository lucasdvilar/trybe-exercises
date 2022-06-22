const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
    const books = await BooksService.getAll();
    res.status(200).json(books);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    if (book.error) return next(book.error);
    res.status(200).json(book);
};

const create = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.create(title, author, pageQuantity);
    res.status(201).json(book);
};

const update = async (req, res, next) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.update(id, title, author, pageQuantity);
    if (book.error) return next(book.error);
    res.status(200).json(book);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const book = await BooksService.remove(id);
    res.status(200).json(book);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
