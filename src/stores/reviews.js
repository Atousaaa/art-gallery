
export default (state = {}, action) => {
    const { type, ...rest } = action;

    switch (type) {
        case 'RECIEVE_REVIEW':
            const categoryName = rest.category.toLowerCase();
            const photoTitle = rest.title.toLowerCase();
         if (state[categoryName] && state[categoryName][photoTitle]) {
                state[categoryName][photoTitle].push({name:rest.username,review:rest.text});
            } else {
                state[categoryName] = { [photoTitle]: [{name:rest.username,review:rest.text}] }
            }
            return state;
        default:
            return state;

    }
}


//json file steps (review.json)
//
// {
//     "portrait": {
//     "portrait3": [{"name": "test1", "reivew": "test1"}]
// }
// }
//
//
// {
//     "category": "Portrait",
//     "title": "Portrait3",
//     "text": "Hello saman",
//     "username": "saman"
// }


//
// [ {
//     "category" : "portrait",
//     "title" : "portrait3",
//     "text" : "nice!",
//     "username" : "atousa"
// }, {
//     "category" : "landscape",
//     "title" : "scream",
//     "text" : "very good",
//     "username" : "andrea"
// } ];
