
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8000";

let gfs,gridFSBucket;
const conn = mongoose.connection;
conn.once('open',() => {
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection('fs') 
})

export const uploadFile = (req,res) =>{
   try {
    if(!req.file){
        return res.json({message: 'file not found'});
    }
    const imageUrl = `${url}/file/${req.file.filename}`;
    return res.json({message:imageUrl});
   } catch (error) {
    console.log(error);
    res.json({message: error.message})
   }
   
}

export const getImage = async(req, res) =>{
    try {
        const file = await gfs.files.findOne({filename:req.params.filename})

        const readstream = gridFSBucket.openDownloadStream(file._id);
        readstream.pipe(res);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}