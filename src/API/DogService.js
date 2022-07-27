import axios from 'axios';

export default class DogService {
    static async getAllBreeds() {
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/breeds')
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

    static async getBreedRandom() {
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
}