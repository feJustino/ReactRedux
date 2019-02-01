export const languageReducer = (state = {languageList: []}, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return { ...state, languageList: action.payload }
        default:
            return state
    }
}