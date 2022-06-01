const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
	const { id } = req.query;
	
	const books = id ? await Book.getByAuthorId(id) : await Book.getAll();

	res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const books = await Book.getByAuthorId(id);

	if (!books) return res.status(404).json({ message: 'Not found' });
	res.status(200).json(books);
});

app.post('/books', async (req, res) => {
	const { title, authorId } = req.body;

	if (!Book.isValid(title, authorId)) return res.status(400).json({ message: 'Dados inválidos' });

	await Book.createBook(title, authorId);

	res.status(201).json({ message: 'Sucesso!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
