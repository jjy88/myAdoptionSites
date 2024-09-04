const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    animalId: String,
    name: { type: String, required: true },
    breed: { type: String, default: 'Unknown' },
    age: { type: Number, default: 0 },
    intakeType: { type: String, default: 'Unknown' },
    inDate: { type: Date, default: Date.now },
    animalType: { type: String, default: 'Unknown',required: true},
    petSize: { type: String, default: 'MED' },
    color: { type: String, },
 
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;