


export const setArtistDetails =  ({ artistData }) =>{
    console.log("inside artist action");
    return {
        type: 'SET_ARTIST_DETAILS',
        artistData
    }
}

