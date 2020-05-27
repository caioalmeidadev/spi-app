import Protocol from '../models/Protocol';

class ProtocolController {
    async index(req, res) {
        const { userId } = req.params;
        const incommings = await Protocol.where('to', userId).fetch();
        const outgoings = await Protocol.where('from', userId).fetch();

        return res.json({ incommings, outgoings });
    }

    async store(req, res) {
        const { userId } = req.params;

        const newProtocol = {
            from: req.body.from,
            to: req.body.to,
            delivery_date: req.body.delivery_date,
            departue_date: req.body.departue_date,
            description: req.body.description,
            created_by: userId,
        };

        const protocol = await Protocol.create(newProtocol);

        res.json(protocol);
    }
}

export default new ProtocolController();
