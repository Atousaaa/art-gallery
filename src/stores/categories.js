export default (state = {}, action) => {
    switch (action.type) {
        case 'RECIEVE_CATEGORY':
            return {
                [action.category]: action.data,
                ...state
            };
        case 'RECIEVE_CATEGORY_DETAILS':
            return {
                [action.category]: action.data.title,
                ...state
            }

        default:
            return state;

    }
}