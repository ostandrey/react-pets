import axios from 'axios';

const headers = {
    'x-api-key': process.env.REACT_APP_DOG_API_KEY
}
const apiUrl = 'https://api.thedogapi.com/v1'

export default class DogService {

    static async getAllBreeds(limit, page) {
        try {
            const response = await axios.get(apiUrl + '/breeds',
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
            const response = await axios.get(apiUrl + `/breeds/search?name=${name}`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getRandomBreed({order, type, breed_id, limit}) {
        console.log(order, type, breed_id, limit)
        try {
            const response = await axios.get(apiUrl + `/images/search`, {
                params: {
                    order: order || "RANDOM",
                    mime_types: type,
                    breed_id,
                    limit,
                    // page: page - 1,
                }
            })
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getImageById(image_id) {
        try {
            const response = await axios.get(apiUrl + `/images/${image_id}`)
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getFavorites() {
        try {
            const response = await axios.get(apiUrl + `/favourites`, {
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
            const response = await axios.post(apiUrl + `/favourites`,
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

    static async getVotes() {
        try {
            const response = await axios.get(apiUrl + `/votes`,
                {
                    headers
                })
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getSpecificVotes(value) {
        try {
            const response = await axios.get(apiUrl + `/votes`,
                {
                    headers,
                    params: value
                })
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async createVote(image_id, value) {
        try {
            const response = await axios.post(apiUrl + `/votes`,
                {
                    image_id: image_id,
                    sub_id: "your-user-1234",
                    value: value
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

    static async uploadImage(file) {
        console.log(file.get('file'))
        try {
            const response = await axios.post(apiUrl + `/images/upload`, file,
                {
                    headers
                }
            )
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getUploadedImages() {
        try {
            const response = await axios.get(apiUrl + `/images`, {
                headers
            })
            return response;
        } catch (e) {
            console.log(e)
        }
    }
}