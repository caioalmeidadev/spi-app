import User from '../models/User';

class UserController {
    async show(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId, 'id');

        return user;
    }

    async update(req, res) {}
}

export default new UserController();
