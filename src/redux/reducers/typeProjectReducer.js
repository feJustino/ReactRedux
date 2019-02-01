export const typeProjectReducer = (state = {typeList: []}, action) => {
    switch (action.type) {
        case 'SET_TYPE_PROJECT':
            return { ...state, typeList: action.payload }
        default:
            return state
    }
}