import { clone } from 'ramda';

const defaultState = {
    pictureDetails: {
        title: '',
        image: ''
    }
}

export default (reviews = defaultState, action) => {
    //if this arg comes full put inside here otherwise is empty arg
    const { type, ...rest } = action;

    switch (type) {
        case 'RECIEVE_REVIEW':
            const categoryName = rest.category.toLowerCase();
            const photoTitle = rest.title.toLowerCase();

            if (reviews[categoryName] && reviews[categoryName][photoTitle]) {
                const clonedState = clone(reviews);
                clonedState[categoryName][photoTitle].push({name:rest.username,review:rest.text});
                return clonedState;
            } else {
                const clonedState = clone(reviews);
                clonedState[categoryName] = { [photoTitle]: [{name:rest.username,review:rest.text}] }
                return clonedState;
            }
        case 'SET_REVIEWS':
            if (!reviews[rest.category.toLowerCase()]) {
                return {
                    ...reviews,
                    //current state of application
                    [rest.category.toLowerCase()]: {     //latest review
                        [ rest.title.toLowerCase() ]: rest.reviews
                    }
                }
            }

            return reviews;
        default:
            return reviews;

    }
}






//********My Mistake : I was doing before modifynig state by pushing inside, which is completely wrong, you should define new
// object inside each reducer and modify that one .********
//
// export default (state = {}, action) => {
//     const { type, ...rest } = action;
//
//     switch (type) {
//         case 'Set_REVIEWS':
//             const categoryName = rest.category.toLowerCase();
//             const photoTitle = rest.title.toLowerCase();
//             if (state[categoryName] && state[categoryName][photoTitle]) {
//                 state[categoryName][photoTitle].push({name:rest.username,review:rest.text});
//             } else {
//                 state[categoryName][photoTitle] = [];
//             }
//             return state;
//         default:
//             return state;
//
//     }
// }


