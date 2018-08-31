import { DATA_URI } from './config';

// function authenticate(username, password) {
//     const data = {
//         username,
//         password
//     };

//     return fetch(
//         LOGIN_URI,
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8"
//             },
//             body: JSON.stringify(data) // body data type must match "Content-Type" header
//         });
// }

async function fetchJson(uri, options) {
    const response = await fetch(uri, options);

    if (response.status === 200)
        return response.json();
    else
        return Promise.reject(response);
}

export function getData(credentials) {
    return fetchJson(
        DATA_URI,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Basic ${credentials}`
            }
        });
}