import axios from 'axios';

export default class DogService {
    static async getAll() {
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/breeds')
            console.log(response)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}