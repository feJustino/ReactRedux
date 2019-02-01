export const versionReducer = (state = {versionList: []}, action) => {
    switch (action.type) {
        case 'SET_VERSION':
            return { ...state, versionList: action.payload }
        default:
            return state
    }
}