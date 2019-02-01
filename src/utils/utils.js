import Axios from 'axios';

const URL = 'https://5c52f0255dcbc40014b3acae.mockapi.io/api/dependencie'
    
export function matchStateToTerm(state, value) {
    return (
        state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
}