import{usuario} from ". /modelos/usuario"
import { appdatasource } from ". sqlite"
const insertar = async (nombre:string, correo:string)=>{
    const usuarioNuevo = new usuario()
    usuarioNuevo.nombre = correo
    try{
        return await appdatasource.manager.save(usuarioNuevo)
    }
    catch (error){
        return false
    }
    appdatasource.manager.save
}