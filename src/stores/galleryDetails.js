
export default (state = {}, action) => {  //state of reducer
    const { type, photoData } = action;

    switch (type) {

        case 'SET_GALLERY_DETAILS' :
            console.log("we are in gallery reducer and details page and photodata is :", photoData);
            return photoData;   //TODO: CHECK AND FIX HERE

        default:
            return state;
    }
    }

