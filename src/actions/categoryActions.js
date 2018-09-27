


export const recieveCategory =  ({ data, category }) =>{
    return {
        type: 'RECIEVE_CATEGORY',
        data,
        category
    }
}


export const recieveCategoryDetails =  ({ data, category }) =>{
    return {
        type: 'RECIEVE_CATEGORY_DETAILS',
        data,
        category
    }
}