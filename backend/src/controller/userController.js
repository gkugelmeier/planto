const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { name } = req.body;
        const { phone } = req.body;
        const { address } = req.body;
        const { email } = req.body;
        const { password } = req.body;

        let newUser = await User.findOne({ email });

        if (newUser == null) {
            newUser = await User.create({
                name,
                phone,
                address,
                email,
                password
             });

            return res.json(newUser);
        }

        return res.json(newUser);
    },

    async show(req, res) {

        const { email } = req.headers;
        const { password } = req.headers;

        //&& password == dataUser.password

        let dataUser = await User.findOne({ email });

        if (dataUser != null) {
            if (email == dataUser.email && password == dataUser.password) {
                return res.json({
                    status: 200,
                    id : dataUser._id,
                });
            }
            else{
                return res.json({ status: 4011 });
            }
        }
        else {
            return res.json({ status: 4012 });
        }
    }
};