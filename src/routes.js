import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProtocolController from './app/controllers/ProtocolController';

import AuthMiddleware from './app/middlewares/Auth';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'ok' });
});

routes.post('/session', SessionController.store);
routes.use(AuthMiddleware);
routes.get('/user', UserController.show);

routes.post('/protocol', ProtocolController.store);
routes.get('/protocol', ProtocolController.index);

export default routes;
