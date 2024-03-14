const fs = require('fs'); 
fs.writeFile('./ejemplocallback.txt', 'Prueba callback', (error) => {
    /*
        La operación a realizar el similar al metodo anterior, la diferencia es que ahora estamos trebajando con una callback para preguntar si algo salio mal durante la operación de escritura del archivo.
    */

    if (error) return console.log('Error al escribir el archivo') // Se realiza la consulta sobre un posible erros al callback.
    fs.readFile('./ejemplocallback.txt', 'utf-8', (error,resultado) => {
        if (error) return console.log('Error al leer el archivo')
        console.log(resultado);
        fs.appendFile('./ejemplocallback.txt', 'Más contenido', (error) => {
            if (error) return console.log('Error al actualizar el archivo')
            fs.readFile('./ejemplocallback.txt', 'utf-8', (error, resultado) => {
                if (error) return console.log('Error al leer el archivo')
                console.log(resultado);
                fs.unlink('./ejemplocallback.txt', (error) =>{
                    if(error) return console.log("No se puede eliminar el archivo");
                })
            })  
        })
    })
})