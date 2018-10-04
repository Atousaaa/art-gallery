const baseUrl= "http://localhost:5000";

export function fetchJSON(req) {

   return fetch(`${baseUrl}${req}`)

        .then(response => response.json())

        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
}



export function postJSON(apiEndpoint, postData) {
    fetch(`${baseUrl}${apiEndpoint}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}


//
// export function postJSON(req,data) {
//
//     fetch(`${baseUrl}/api/detail/${data.category}/${data.title}`, {
//         method: 'POST',
//         body: data
//     })
//
//     .then(response => response.json())
//         .then(response => console.log('Success:', JSON.stringify(response)))
//         .catch(error => console.error('Error:', error));
// }