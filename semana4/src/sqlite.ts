import { DataSource} from "typeorm";
import { usuario } from "./modelos/usuario";
import "reflect-metadta"

export const appdatasource = new DataSource({
    type:"sqlite",
    database: "database-sqlite",
    entities:[
        usuario
    ],
    synchronize: true,
    logging: true,
    migatrion: []
})