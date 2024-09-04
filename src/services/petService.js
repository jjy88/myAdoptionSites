const axios = require('axios');

const fetchPetAdoptionData = async () => {
    try {
        //await fetch make function paused until the network request completes and the result is returned.
        const response = await axios.get('https://data.montgomerycountymd.gov/resource/e54u-qx42.json');
        return response.data;  
    } catch (error) {
        console.error('Error fetching pet data:', error);
        throw error;
    }
};

module.exports = { fetchPetAdoptionData };