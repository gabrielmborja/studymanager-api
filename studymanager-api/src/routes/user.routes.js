import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const router = Router();

router.post('/users', userController.create);

router.get('/users', userController.listAll);

router.get('/users/:id', userController.show);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.remove);

router.get('/users/:id/courses', userController.show);

export default router;