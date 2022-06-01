const connection = require('./connection');

const serialize = ({ id, title, author_id }) => ({
	id,
    title,
	authorId: author_id});

const getAll = async () => {
    const [books] = await connection.execute('SELECT * FROM model_example.books');
    
    return books.map(serialize);
};

const getByAuthorId = async (id) => {
    const [books] = await connection.execute('SELECT * FROM model_example.books WHERE author_id = ?', [id]);

    return books.map(serialize);
};

const isValid = async (title, author_id) => {
    const [authors] = await connection.execute('SELECT id FROM model_example.authors');
    const authorDoesNotExist = authors.find((author) => author.id === author_id);
    if (!title || title.length < 3) return false;
    if (!author_id || authorDoesNotExist) return false;
    return true;
};

const createBook = async (title, author_id) => {
    const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
    connection.execute(query, [title, author_id]);
};

module.exports = {
	getAll,
    getByAuthorId,
    isValid,
    createBook,
};
