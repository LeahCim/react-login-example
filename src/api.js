import { DATA_URI } from './config';

export default class Api {
    // static authenticate(username, password) {
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