import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/Auth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'ok' });
});

routes.post('/session', SessionController.store);
routes.use(AuthMiddleware);
routes.get('/user', UserController.show);

export default routes;
