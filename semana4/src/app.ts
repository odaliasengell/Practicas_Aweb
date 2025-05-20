import { insertar } from ".metodos"

console.log("Hola mundo")

async function main (){
    inicializar
    const usuarioNuevo = await insertar ("Alberto", "cd1232@gmail.com")
}