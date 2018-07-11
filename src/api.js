export default class Api {
    // static authenticate(username, password) {
    //     const LOGIN_URI = 'https://example.com/login';
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

    static async getData(credentials) {
        const DATA_URI = 'https://example.com/data';

        const response = await fetch(
            DATA_URI,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": `Basic ${credentials}`
                }
            });

        if (response.status === 200)
            return response.json();
        else {
            return Promise.reject(`Response status: ${response.status}`);
        }
    }
}