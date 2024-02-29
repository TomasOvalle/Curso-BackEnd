const super1 = { nombre: "Flash"};
const super2 = { nombre: "Wolverine"};
const super3 = { nombre: "X-23"};
let super4 = { nombre: "RedHood"};
const super5 = { nombre: "Profesor X"};

function printName(obj) {
    return `el nombre del súperheroé es ${obj.nombre}`;
}

console.log(printName(super1));
console.log(printName(super2));
console.log(super5.nombre);

super5.edad = 33;
super5.ciudad = "New York";
console.log(super5);

super4 = { nombre: "NightWing"};
console.log(super4);

const printAll = (arrayOfSupers) => {
    // por cada elemento del array de superheroes
    for ( let superheroe of arrayOfSupers) {
        console.log(printName(superheroe));
    }
    console.log(array1);
}

const array1 = [ super1, super2 ];
printAll(array1);
printAll([super3, super4, super5]);
printAll([]);