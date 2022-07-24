import axios from 'axios';

export default class DogService {
    static async getAllDogs() {
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/breeds')
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getDogsByName(name) {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?name=${name}`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getDogRandom() {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/images/search`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getDogVotes() {
        try {
            const response = await axios.get(`https://api.thedogapi.com/v1/votes`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }
}