import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER, API_BASE } from '../constants'

// post request to login user if correct information is used
export const loginUser = (userData) => dispatch => {
    axios.post(`${API_BASE}/users/login`, userData)
    .then(res => {
        const { token } = res.data
        localStorage.setItem('jwtToken', token)
        setAuthHeader(token)
        dispatch(getCurrentUser())
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}
// finds current user
export const getCurrentUser = () => dispatch => {
    axios.get(`${API_BASE}/users`)
    .then(res => dispatch(setCurrentUser(res.data)))
}
export const setCurrentUser = (data) => {
    return {
        type: SET_CURRENT_USER,
        payload: data
    }
}
// logout user
// export const logoutUser = () => dispatch => {
//     localStorage.removeItem('jwtToken')
//     setAuthHeader()
//     dispatch(setCurrentUser(null))
// }