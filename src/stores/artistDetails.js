
export default (state = {}, action) => {
    const { type,artistData } = action;

    switch (type) {

        case 'SET_ARTIST_DETAILS' :
            console.log("we are in artist reducer", artistData);
            return artistData;

        default:
            return state;
    }
}

