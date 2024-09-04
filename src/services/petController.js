//This controller function `savePetData`, fetches pet data from an external API and stores it in the MongoDB `Pet` collection. If successful, returns a success message; if fails, returns error message.
const Pet = require('../models/petModel');
const { fetchPetAdoptionData } = require('../services/petService');

const savePetData = async (req, res) => {
    try {

        const petData = await fetchPetAdoptionData();
        
//InsertMany is used to insert multiple documents (pet objects) into the Pet collection in MongoDB. 
//The await is used to ensure insertion completes before the next line of code executes.
        await Pet.insertMany(petData);
//200 means request sucessfully completed
        res.status(200).send('Pet data saved to MongoDB successfully!');
    } catch (error) {
//Internal Server Error: server-side error;
        res.status(500).send('Error saving pet data: ' + error.message);
    }
};

module.exports = { savePetData };