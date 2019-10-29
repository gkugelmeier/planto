const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema(
    {
        name: String,
        species: String,
        date: String,
        status: String,
        water: [String],
        lighting: [String],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

module.exports =  mongoose.model('Plant', PlantSchema);