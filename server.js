import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);


io.on('connection',(socket)=>{
    console.log('socket connected',socket.id);
})
const PORT = process.env.PORT || 8000;
server.listen(PORT , ()=>{
    console.log('Listeninig on ',PORT);
})
