export default (state = {}, action) => {
    switch (action.type) {
        case 'RECIEVE_CATEGORY':
            return {
                [action.categoryName]: action.selectedCategory,
                ...state
            };

        default:
            return state;

    }
}