

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

export const setConversation = async(data) =>{
    try {
        await axios.post(`${url}/conversation/add`,data);
    } catch (error) {
        console.log('Errroe while setting conversation',error.message);
    }
}


export const getConversationFromDB = async(data) =>{
    try {
        let response = await axios.post(`${url}/conversation/get`,data);
        return response
    } catch (error) {
        console.log('Errroe while getting conversation while callinf api',error);
    }
}

export const saveMessagesToDB = async(message) =>{
    try {
        let response = await axios.post(`${url}/message/add`,message);
        return response
    } catch (error) {
        console.log('Errroe while saving messages while calling api',error);
    }
}

export const getMessageFromDB = async (conversationId) => {
    try {
        let response = await axios.get(`${url}/message/get`, {
            params: { conversationId }
        });
        return response;
    } catch (error) {
        console.log("Error while getting message while calling API", error);
    }
};


export const uploadFileToDB = async (data) => {
    try {
       return await axios.post(`${url}/file/upload`, data); // Ensure this matches the route in your backend
    } catch (error) {
        console.log("Error while uploading data to db from frontend", error.message);
    }
};


