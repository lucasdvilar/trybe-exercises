const express = require('express');
const rescue = require('express-rescue');
const BooksController = require('./controllers/BooksController');

const app = express();

app.use(express.json());

app.get('/books', rescue(BooksController.getAll));

app.get('/books/:id', rescue(BooksController.getById));

app.post('/books', rescue(BooksController.create));

app.put('/books/:id', rescue(BooksController.update));

app.delete('/books/:id', rescue(BooksController.remove));

app.use((err, _req, res, _next) => {
    if (err.code && err.message) {
        return res.status(err.code).json({ message: err.message });
    }
    return res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
