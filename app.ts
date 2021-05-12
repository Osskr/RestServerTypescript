import dotenv from 'dotenv';
import Server from './models/server';

//configurar dot env
dotenv.config()


//creacion del server
const server = new Server();

server.listen();