import User from '../models/User';

class UserController {
    async show(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId, 'id');

        return res.send(user);
    }

    async update(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId);

        const { username, name, provider, admin } = req.body;

        await user.update({ username, name, provider, admin });

        return res.json(user);
    }
}

export default new UserController();
