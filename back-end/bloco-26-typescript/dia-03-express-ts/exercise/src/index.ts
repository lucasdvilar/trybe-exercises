import express, { Request, Response} from 'express';
import BooksRoutes from './routes/users';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.status(200).send('Hi!');
});

// validation and business rules were ignored
app.use(BooksRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Running at ${PORT}`));