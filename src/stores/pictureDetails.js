
export default (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SHOW_DETAILS':
            console.log("R????????? ", payload)
            // const category = payload.category;
            // const title = payload.title;
            // const image = payload.image;
            // const author = payload.author;
            // const year = payload.year;
            // const publisher = payload.publisher;
            // const description = payload.description;

            // This updated the application state
            return {
                ...state,
                //current state of application
                ...payload
            }

        default:
            return state;

}
}