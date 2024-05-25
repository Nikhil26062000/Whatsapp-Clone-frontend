

import axios from 'axios';

export default addUser = async (data) =>{
    try {
        await axios.post(url, data);
    } catch (error) {
        console.log('Errroe while adding user',error.message);
    }
}