import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import ACTIONS from './src/actions.js';

const app = express();
const server = createServer(app);
const io = new Server(server);
const userSocketMap = {};

function getlAllClients(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
        return {
            socketId,
            username: userSocketMap[socketId],
        }
    })
}


io.on('connection',(socket)=>{
    console.log('socket connected',socket.id);
    socket.on(ACTIONS.JOIN,({roomId,userName}) =>{
        userSocketMap[socket.id] = userName;
        socket.join(roomId);
        const clients = getlAllClients(roomId)
        console.log(clients)
    })
})
const PORT = process.env.PORT || 8000;
server.listen(PORT , ()=>{
    console.log('Listeninig on ',PORT);
})
