const axios = require("axios");
const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");

//index -> indice
//show -> mostra um
//store -> armazenar
//update -> atualizar
//destroy -> apagar

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let user = await Dev.findOne({ github_username });

        if (!user) { 
            const apiResponse = await axios.get(
                `https://api.github.com/users/${github_username}`
            );
        
            let { name = login, avatar_url, bio } = apiResponse.data;
            let techsArray = parseStringAsArray(techs);
            if (!bio) {bio = "Sem descrição"; }
        
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }
        
            user = await Dev.create({
                bio,
                name,
                location,
                avatar_url,
                github_username,
                techs: techsArray
            });
        }
    
        return response.json(user);
    }
};