


export const recieveCategory =  ({ selectedCategory, categoryName }) =>{
    return {
        type: 'RECIEVE_CATEGORY',
        selectedCategory,
        categoryName
    }
}

