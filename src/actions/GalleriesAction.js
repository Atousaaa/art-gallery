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

export const setGalleryDetails = (photoData) => {
    console.log("inside galleries action and photo data is :",photoData);
    return {
        type: 'SET_GALLERY_DETAILS',
        photoData
    }
}
//TODO FIX THE SET GALLERY ACTION ABOVE