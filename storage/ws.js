/* export default{
    saludar(){
        return "HOla soy el worker";
    }
} */
self.addEventListener("message",(e)=>{
    console.log(e.data);
    postMessage({mensaje: `el mensaje '${e.data.nombre}' Obtenido`})
})