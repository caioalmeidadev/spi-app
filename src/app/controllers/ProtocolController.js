import { parseISO } from 'date-fns';

import Protocol from '../models/Protocol';

class ProtocolController {
    async index(req, res) {
        const { userId } = req;
        const incommings = await Protocol.findAll({
            where: { created_by: userId },
            order: ['date'],
        });

        return res.json({ incommings });
    }

    async store(req, res) {
        const { userId } = req;

        const newProtocol = {
            from: req.body.from,
            to: req.body.to,
            delivery_date: parseISO(req.body.delivery_date),
            departue_date: parseISO(req.body.departue_date),
            description: req.body.description,
            created_by: userId,
            user_id: userId,
        };

        const protocol = await Protocol.create(newProtocol);

        res.json(protocol);
    }
}

export default new ProtocolController();
