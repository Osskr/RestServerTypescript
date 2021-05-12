//configuracion de la base de datos

import { Sequelize } from "sequelize";

const db = new Sequelize('node-ts','root','',{
    host:'localhost',
    dialect:'mariadb'
})

export default db;