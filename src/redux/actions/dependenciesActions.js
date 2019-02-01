import Axios from 'axios';

const URL = 'https://5c52f0255dcbc40014b3acae.mockapi.io/api/dependencie'

export const changeDependencies = (e) => {
    return {
        type: 'DEPENDENCIES_CHANGED',
        payload: e.target.value
    }
}

export const getDependencies = () => (dispatch) => {
    Axios.get(`${URL}`).then((response) => {
        dispatch(setDependecies(response.data))
    })
}

export const setDependecies = (payload) => {

    return {
        type: 'SET_DEPENDENCIES',
        payload
    }
}

export const searchDependencies = (value) => {
    
    return{
        type: 'SEARCH_DEPENDENCIES',
        value
    }
}

export const selectDependencies = (dep) => {
    return{
        type: 'SELECT_DEPENDENCIES',
        dep
    }
}

export const unselectDependencies = (index) => {
    return{
        type:'UNSELECT_DEPENDENCIES',
        index
    }
}