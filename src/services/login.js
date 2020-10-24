import axios from 'axios'
const baseUrl = '/login'

// sending the HTTP post request to server address ‘/login’
const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }