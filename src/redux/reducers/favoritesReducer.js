export const favorites = (state = {
        isLoading: true,
        errMess: null,
        favorites: null
    }, action) => {
    switch(action.type) {
        case 'ADD_FAVORITES':
            return {...state, isLoading: false, errMess: null, favorites: action.payload};

        case 'FAVORITES_LOADING':
            return {...state, isLoading: true, errMess: null, favorites: null};

        case 'FAVORITES_FAILED':
            return {...state, isLoading: false, errMess: action.payload, favorites: null};

        default:
            return state;
    }
}