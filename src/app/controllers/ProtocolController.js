import { parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import Protocol from '../models/Protocol';

class ProtocolController {
    async index(req, res) {
        const { userId } = req;
        const incommings = await Protocol.findAll({
            where: { user_id: userId },
            order: ['date'],
        });

        return res.json({ incommings });
    }

    async store(req, res) {
        const { userId } = req;

        const newProtocol = {
            from: req.body.from,
            to: req.body.to,
            delivery_date: zonedTimeToUtc(
                parseISO(req.body.delivery_date),
                'America/Porto_Velho'
            ),
            departue_date: zonedTimeToUtc(
                parseISO(req.body.departue_date),
                'America/Porto_Velho'
            ),
            description: req.body.description,
            created_by: userId,
            user_id: userId,
        };

        const protocol = await Protocol.create(newProtocol);

        res.json(protocol);
    }
}

export default new ProtocolController();
