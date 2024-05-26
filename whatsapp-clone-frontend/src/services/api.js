

import axios from 'axios';

const url='http://localhost:8000';

export const addUser = async (data) =>{
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('Errroe while adding user',error.message);
    }
}

export const getUser = async () =>{
    try {
        let response = await axios.get(`${url}/users`)
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.log('Errroe while getting user',error.message);
    }
}