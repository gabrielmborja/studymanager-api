import { Router } from 'express';
import courseController from '../controllers/course.controller.js';

const router = Router();

router.post('/courses', courseController.create);

router.get('/courses', courseController.listAll);

router.get('/courses/:id', courseController.show);

router.put('/courses/:id', courseController.update);

router.delete('/courses/:id', courseController.remove);

export default router;