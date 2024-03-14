const fs = require('fs'); 
// Como se explica en el contenido de las diapositivas 'fs' permite acceder a las operaciones para archivos.

fs.writeFileSync('./ejemplo.txt', "Archivo creado")
    /*
        1-. Al escribir un archivo el primer argumento o parametro de se da es la ruta y nombre del archivo sobre el que se va a trabajar.
        2.- El segundo argumento o parametro es el contenido del archivo.
    */

if(fs.existsSync('./ejemplo.txt')) { // existSync devuelve el valor booleano true o false dependiendo de la existencia del archivo
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
        /*
            readFileSync se encarga de leer el contenido del archivo, es importante que el segundo parametro a colocar sea el tipo de codificacion que se utilizara para leer el archivo. En este caso se utilizara utf-8.
        */

    console.log(contenido); // El resultado esperado es lo programado en la linea 4

    fs.appendFileSync('./ejemplo.txt', 'Hola buen día')
        /*
            Este metodo funciona mediante el siguiente procedimiento:
                1.- Buscar la ruta del archivo.
                2.- Si no hay una ruta, este metodo creara una.
                3.- Por el contrario si existe la ruta en lugar de sobreecribir el contenido del archivo,
                    este metodo pondra el nuevo contenido al final de lo ya existente.
        */

    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    // Volvemos a leer el contenido del archivo 
    console.log(contenido);
    //El contenido del archivo será una suma de lo que se ingreso en primera instancia más lo ingresado mediante el metodo appendFileSync

    fs.unlinkSync('./ejemplo.txt');
    //En última instancia este metodo elimara el archivo independientemente del contenido que tenga.
}