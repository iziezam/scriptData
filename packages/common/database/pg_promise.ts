import pgPromise from "pg-promise";
import {client} from "./db_config";
const pgp = pgPromise();

export const db  = pgp(client)

export async function dbConnection() {
    try{
        const DB_CON = await db.connect(); // try to connect
        DB_CON.done(); // success, release connection
        return DB_CON.client.serverVersion; // return server version
    }catch(e){
        console.log("DBG:PG_PROMISE:ERR: " + JSON.stringify(e))
    }

}
