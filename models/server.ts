import express, {Application} from 'express'
import userRoutes from '../routes/usuario';
import cors from 'cors'
import db from '../db/connection';
//en typescript necesitamos instalar los tipos
// npm i --save-dev @types/express, esto nos habilita todo el tipado de express como si estuviera escrito
//en typescript
//lo mismo puede pasar con otros modulos
// desestructuro aplication para evitar hacer express.aplication
class Server {

    //debemos definir las propiedades de ante mano como en java
    private app: Application;
    private port : string;
    private apiPaths = {
        usuarios: '/api/users'
    }

     constructor(){
        this.app = express();
        this.port = process.env.PORT || '8500';
        
        //Metodos iniciales
        this.middlewares()
        this.routes();
        this.dbConnection()
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('database Online')
        } catch (error) {
            throw new Error(error)
        }
    }

    //TODO conectar BD
    middlewares(){
        //CORS
        this.app.use(cors())
        //Lectura Body
        this.app.use(express.json())
        //Carpeta Publica
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }


    listen(){
        this.app.listen(this.port, ( )=>{
            console.log('Servidor running en puerto: ' + this.port);
        })
    }
}
 
export default Server;