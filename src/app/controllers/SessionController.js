import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        if (!(await user.checkPassword(password))) {
            return res
                .status(401)
                .json({ error: 'A senha digitada não confere' });
        }

        const { id, name, avatar, provider, admin } = user;
        const token = jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        });

        return res.json({ id, name, avatar, provider, admin, token });
    }
}

export default new SessionController();
