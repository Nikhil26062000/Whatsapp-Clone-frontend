import express from 'express';
import { addUser , getUser } from '../controllers/user-controller.js';
import { newConversation } from '../controllers/conversation-controller.js';

const route = express.Router();

route.post('/add',addUser)
route.get('/users',getUser)

route.post('/conversation/add',newConversation)
export default route;