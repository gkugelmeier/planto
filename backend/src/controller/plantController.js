const Plant = require('../models/Plant');

module.exports = {

    // FUNÇÃO PARA CRIAÇÃO DE UMA NOVA PLANTA
    async store(req, res) {
        const { name } = req.body;
        const { species } = req.body;
        const { date } = req.body;
        const { status } = req.body;
        const { water } = req.body;
        const { lighting } = req.body;
        const { user_id } = req.headers;

        const newPlant = await Plant.create(
            {
                user: user_id,
                name,
                species,
                date,
                status,
                water: water.split(',').map(w => w.trim()),
                lighting: lighting.split(',').map(l => l.trim())
            }
        );

        return res.json(newPlant);
    },

    //LISTAR PLANTAS
    async index(req, res) {

        const id = req.headers.user_id;

        const listPlant = await Plant.find({ user: id });

        return res.json(listPlant);
    }

};