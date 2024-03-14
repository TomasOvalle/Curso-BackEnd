/*
Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola. 
Utilizar el módulo fs y sus operaciones de tipo callback.
*/

const fechaHoraActual = new Date().toLocaleString();

const fs = require('fs');

fs.writeFile('./fechaYHoraActual.txt', fechaHoraActual, (error) => {
    if (error) return console.log("Error al crear el archivo")
    fs.readFile('./fechaYHoraActual.txt', 'utf-8', (error, resultado) => {
        if (error) return console.log("Error al leer el archivo")
        console.log(resultado)
    })
})

