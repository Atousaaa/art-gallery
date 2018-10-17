export const setGalleries = (galleriesData) => {
    return {
        type: 'SET_GALLERIES',
        galleriesData
    }
}

export const sortGalleries = (sortValue, galleriesData) => {

    if (sortValue === "rating") {
        return {
            type: 'SORT_BY_RATING',
            sortValue,
            galleriesData
        }
    }
    else if (sortValue === "alphabet") {
        return {
            type: 'SORT_BY_ALPHABET',
            sortValue,
            galleriesData
        }
    }
    else if (sortValue === "date") {
        return {
            type: 'SORT_BY_DATE',
            sortValue,
            galleriesData
        }
    }


}