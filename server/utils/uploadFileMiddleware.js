
import dotenv from "dotenv";
import multer from 'multer';

import {GridFsStorage} from 'multer-gridfs-storage'
dotenv.config();

const URL = process.env.DB_URL;
const storage = new GridFsStorage({
    url:URL,
    options : {useUnifiedTopology:true,useNewUrlParser:true},
    file:(request,file)=>{
        const match = ["image/png","image/jpg"];

        if(match.indexOf(file.mimeType)=== -1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return{
            bucketName : "photos",
            filename : `${Date.now()}-file-${file.originalname}`

        }
    }
});

export default multer({storage});
