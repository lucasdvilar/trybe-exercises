import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById)
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.remove);

export default router;
