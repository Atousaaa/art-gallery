


export const showDetails = ({category, name,photoDetails}) =>{
    return{
        type: 'SHOW_DETAILS',
        payload: {
            category,
            name,
            photoDetails
        }

        // image,
        // author,
        // year,
        // publisher,
        // description

    }
}