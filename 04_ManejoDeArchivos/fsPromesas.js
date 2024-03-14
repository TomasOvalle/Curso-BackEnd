const fs = require('fs')

const operacionesAsincronas = async() => { // En este metodo la función debe ser asíncrona por que trabajamos con promesas
    // Creamos el archivo
    await fs.promises.writeFile('./ejemploPromesas.txt', 'Buenas tardes') // Ruta y nombre de archivo, contenido
    // Al utilizar el metodo con promesas se nos facilita la operacion y de esta forma no se requiere estar dentro de callbacks

    let resultado = await fs.promises.readFile('./ejemploPromesas.txt', 'utf-8') // Ruta y nombre de arhcivo, codificacion
    console.log(resultado);

    // Modificamos el archivo
    await fs.promises.appendFile('./ejemploPromesas.txt', 'Vamos a jugar')

    // Reelemos el archivo
    resultado = await fs.promises.readFile('./ejemploPromesas.txt', 'utf-8');
    console.log(resultado);

    // Finalmente borramos el archivo
    await fs.promises.unlink('./ejemploPromesas.txt');
} 

operacionesAsincronas();