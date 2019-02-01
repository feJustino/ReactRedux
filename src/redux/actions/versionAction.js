import Axios from 'axios';

const URL = 'https://5c52f0255dcbc40014b3acae.mockapi.io/api/version'

export const getVersion = () => (dispatch) => {
    Axios.get(`${URL}`).then((response) => {
        dispatch(setVersion(response.data))
    })
}

export const setVersion = (payload) => {

    return {
        type: 'SET_VERSION',
        payload
    }
}