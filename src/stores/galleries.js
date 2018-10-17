export default (state = [], action) => {  //state of reducer
    const { type, galleriesData } = action;

    switch (type) {

        case 'SET_GALLERIES' :
            return galleriesData;
        case 'SORT_BY_ALPHABET' :
            return state.slice().sort(function (a, b) {
                const nameA = a.title.toUpperCase(),
                    nameB = b.title.toUpperCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })

        case 'SORT_BY_RATING' :
            return state.slice().sort(function (a, b) {
                const nameA = a.rating.toUpperCase(),
                    nameB = b.rating.toUpperCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })

        case 'SORT_BY_DATE' :
            return state.slice().sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            })


        default:
            return state;
    }
}

