import Axios from 'axios';

const URL = 'https://5c52f0255dcbc40014b3acae.mockapi.io/api/language'

export const getLanguage = () => (dispatch) => {
    Axios.get(`${URL}`).then((response) => {
        dispatch(setLanguage(response.data))
    })
}

export const setLanguage = (payload) => {

    return {
        type: 'SET_LANGUAGE',
        payload
    }
}