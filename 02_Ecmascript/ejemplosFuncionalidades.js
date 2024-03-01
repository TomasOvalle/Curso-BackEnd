// Resumen de las principales funcionalidades que fueron agregadas en cada version de ES

// 1.- ES7:
// Operador exponencial 

const numero = 5
const indice = 8 
const n_a_la_2 = numero ** 2
const n_a_la_3 = numero ** 3
const n_a_la_indice = numero ** indice

console.log(n_a_la_2);
console.log(n_a_la_3);
console.log(n_a_la_indice);

// Método includes() para arrays

const palabra1 = "bet"
const palabra2 = "beto"
const array = ["alfa", "beto", "delta", "alfabeto"]
const incluye_al = palabra1.includes("al")
console.log(incluye_al);
const incluye_bet = palabra2.includes(palabra1)
console.log(incluye_bet);
const incluye_palabra1 = array.includes(palabra1)
console.log(incluye_palabra1);
const incluye_palabra2 = array.includes(palabra2)
console.log(incluye_palabra2);




// 2.- ES8: 
// async/await

async function fetchApi () {
    let response = await fetch(URL)
    response = await response.json()
}

// Object.keys - Object.values - Object.entries

const datos = {
    nombre: "ignacio",
    apellido: "borraz",
    edad: 32
}
const claves = Object.keys(datos)
console.log(claves);
const valores = Object.values(datos)
console.log(valores);
const entradas = Object.entries(datos)
console.log(entradas);




// ES9: 
// Desestructuración

const ignacio = ["ignacio", "borras", 33]
const [ name,lastname ] = ignacio
const [ ,,age ] = ignacio

const datosIgnacio = {
    nombre: "ignacio",
    apellido: "borraz",
    edad: 32
}
const { nombre } = datosIgnacio
const { apellido, edad } = datosIgnacio
console.log(datosIgnacio);

// Estructuración 

const nombre1 = 'ignacio'
const apellido1 = 'borraz'
const edad1 = 33
const datos1 = { nombre, apellido, edad }
console.log(datos1);

// Operador Spread

const datosSatoru = {
    nombre: "Satoru",
    apellido: "Gojo"
}
const años = 29
const masDatos = { ...datosSatoru, años}
console.log(masDatos);

const datosDennisse = [ "Dennisse", "Aguilar", 23]
const ciudad = "Panguipulli"
const masDatos2 = [ ...datosDennisse, ciudad ]
console.log(masDatos2);

// Rest

let datosTomas = {
    nombre: "Tomás",
    apellido: "Ovalle",
    edad: 23
}
let { nombreTomas } = datosTomas
const { apellidoTomas,edadTomas } = datosTomas
console.log(datosTomas);

const datosTomas1 = [ 'Tomás', 'Ovalle', 23, 'Panguipulli' ]
let [ primera, ...lasOtras ] = datosTomas1
console.log(datosTomas1);




// ES10
// Trim

let texto = "      tiene esapcios adelante y atras      "
let textoTrim = texto.trim()
console.log(texto);
console.log(textoTrim);


// Flat

let arrayAninado = [ "hola", ["como", "estas", "bien", "bien!"]]
let arrayFlat = arrayAninado.flat()
console.log(arrayAninado);
console.log(arrayFlat);




// ES11
// Nullish

let cero = 0
let nulo = null
let no_definido = undefined
cero = cero ?? "se reasigna sólo si es nulo/indefinido"
nulo = nulo ?? "sólo si es nulo/indefinido"
no_definido = no_definido ?? "sólo si es nulo/indefinido"
console.log(cero);

// Propiedades privadas de clase

class Produto { 
    constructor(datos) {
        this.precio = datos.precio
        this.costo = datos.costo
    }
    #ganancia = () => this.precio - this.costo
    calcularGanancia = () => this.#ganancia() * this.stock
}