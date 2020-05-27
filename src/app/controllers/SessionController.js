import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { username, password } = req.body;
        console.log(username, password);

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        if (!(await user.checkPassword(password))) {
            return res
                .status(401)
                .json({ error: 'A senha digitada não confere' });
        }

        return res.json(user);
    }
}

export default new SessionController();
