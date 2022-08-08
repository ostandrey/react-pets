import axios from 'axios';

const headers = {
    'x-api-key': process.env.REACT_APP_DOG_API_KEY
}

export default class DogService {

    static async getAllBreeds(limit, page) {
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/breeds',
                {
                params: {
                    limit: limit,
                    page: page - 1
                }}
            )
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getBreedsByName(name) {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?name=${name}`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getBreedById() {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/votes`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getRandomBreed() {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/images/search`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getImageById(image_id) {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/images/${image_id}`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getBreedVotes() {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/votes`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getFavorites() {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/favourites`, {
                headers
            })
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async saveFavorite(image_id) {
        console.log(image_id)
        try {
            const response = await axios.post(`https://api.thedogapi.com/v1/favourites`,
                {
                    image_id: image_id,
                    sub_id: "your-user-1234",
                },
                {
                    headers
                }
            )
            return response;
        } catch (e) {
            console.log(e)
        }
    }
}