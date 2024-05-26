import mongoose from 'mongoose';

const connection = () =>{
    const URL=process.env.DB_URL
    try {
        mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('erro while connection db',error.message);
    }
}

export default connection;