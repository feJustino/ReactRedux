import { matchStateToTerm } from '../../utils/utils';

export const dependenciesReducer = (state = {
    dependenciesChange: '', dependenciesList: [], list: [], dependenciesSelected: []
}, action) => {
    switch (action.type) {
        case 'DEPENDENCIES_CHANGED':
            state.loading = true
            return { ...state, dependenciesChange: action.payload }
        case 'SET_DEPENDENCIES':
            return { ...state, dependenciesList: action.payload }
        case 'SEARCH_DEPENDENCIES':
            const list = state.dependenciesList.filter(state => matchStateToTerm(state, action.value));
            state.loading = false;
            return { ...state, list }
        case 'SELECT_DEPENDENCIES':
            state.dependenciesSelected.push(action.dep)
            return{ ...state }
        case 'UNSELECT_DEPENDENCIES':
            state.dependenciesSelected.splice(action.index, 1)
        return{...state}
        default:
            return state
    }
}