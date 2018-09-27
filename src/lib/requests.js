const baseUrl= "http://localhost:5000";


export function fetchJSON(req) {

   return fetch(`${baseUrl}${req}`)

        .then(response => response.json())

        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
}

