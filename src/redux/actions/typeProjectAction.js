import Axios from 'axios';

const URL = 'https://5c52f0255dcbc40014b3acae.mockapi.io/api/project'

export const getTypeProject = () => (dispatch) => {
    Axios.get(`${URL}`).then((response) => {
        dispatch(setTypeProject(response.data))
    })
}

export const setTypeProject = (payload) => {

    return {
        type: 'SET_TYPE_PROJECT',
        payload
    }
}