export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch(action.type) {
        case 'ADD_COMMENTS':
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case 'COMMENTS_FAILED':
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        case 'ADD_COMMENT':
            alert('Comment added...');
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
}