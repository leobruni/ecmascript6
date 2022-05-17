function nuevaFuncion(nombre, edad, pais){
    var nombre = nombre || 'kike';
    var edad = edad || 29;
    var pais = pais || 'VE';

    console.log(nombre, pais, edad);
}

let hola = 'hola';
let world = 'world';
let fraseEpica = hola + ' ' + world;
console.log(fraseEpica);

//Template literals

//Concatenar cadenas
let fraseLiteral = `${hola} ${world}`;
console.log(fraseLiteral);

//Cadenas con salto de linea
let lorem = "lorem. Calasdm bla bla bla. Si latin. Gajaskar nubleas soa dis yet\n"
            + "Seguimos con el lorem";

let lorem2 = `Ahora esto es otra frase
Con saltos de linea
sin necesidad del simbolo especial`;

console.log(lorem);
console.log(lorem2);


//Destructuracion de elementos

let persona = {
    'nombre':'Kike',
    'edad': 29,
    'pais': 'VE'
};

console.log(persona.nombre, persona.edad);

//Declaracion en ecmascript 6
let {nombre, edad, pais} = persona;
console.log(nombre,pais);

let team1 = ['kike','jesus','leo'];
let team2 = ['val','jes','cami'];

let educacion = ['Prometeo', ...team1, ...team2];
console.log(educacion);

//Scope de variables VAR y LET
{
    var globalVar = 'GlobalVar';
}
//El let solo es visible dentro de la funcion o {} donde este dentro
{
    let globalLet = 'GlobalLet';
    console.log(globalLet);
}
console.log(globalVar);

//Funciones anonimas y funciones de flecha

let nombres = [
    {nombre:'kike', edad: 24},
    {nombre: 'leo', edad: 29}
];

let listaNombres = nombres.map(function(item){
    console.log(item.nombre);
});

//Funciones flecha
let listaNombres2 = nombres.map(item=>console.log(item.nombre));

const listaNombres3 = (nombre, edad) =>{

};

var ID = function generarID(){
    var generado = Math.random();
    return generado;
};

var arreglo = [
        {
            valorI: "informacion",
            valorII: true
        },
        {
            infoPersonal: "nombre de usuario",
            pw: "contraseña1341_$"
        }, ["String","String", 312, false], "string_arreglo", ID
];



let obtenerValor = arreglo.map(valorBuscado=>(console.log(valorBuscado)));

const listaNombres4 = nombre =>{

};
            //Valor recibido    //Retorna esto
const cuadrado = num                  =>           num   *   num;

//Promesas: son condicionales que retornan algo, son utiles para hacer llamados a APIS, parecidos al try y catch de JAVA

const promesa = ()=> {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Cumplido o Encontrado');
        }else{
            reject('Error!');
        }
    });
}

promesa()
    .then(response => console.log(response))
    .catch(error => console.log(error));



// Clases, Modulos Generadores

// Clases

class calculadora {
    constructor(){
        this.valorA = '';
        this.valorB = 2;
    }
    sum(valora, valorb){
        this.valorA = valora;
        this.valorB = valorb;
        return this.valorA+this.valorB;
    }
}

var calculeitor = new calculadora();
console.log(calculeitor.sum(3,4));

//Importar los modulos



const hello = require('./module.js');// De esta manera tendriamos todas las funciones disponibles(importadas)
console.log(hello());

saludar = console.log(hello());


//Generadores: funcion especial que retorna valores

function* helloWorld(){ //function* Para crear la funcion generadora
    if (true) {
        yield 'Hola, '; //Equivale al return de funciones normales
    }
    if (true) {
        yield 'mundo'; // Los valores retornados con yield se contabilizan
    }
}

const generatorHola = helloWorld();
console.log(generatorHola.next().value);//Devuelve hola
console.log(generatorHola.next().value);//Devuelve mundo
console.log(generatorHola.next().value);//Devuelve undefined


// Buscar el valor exacto dentro de un arreglo
let num = [1,2,3,4,5,6,7,7,7,7,7,555,555];

if (num.includes(7)) {
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se encuentra');
}

// Elevar a la potencia alguna variable
let base = 3;
let exponente = 2;
let resultado = base ** exponente;
console.log(resultado);


const data ={
    front:'Alej',
    back: 'Rel',
    fronto: 'Si?',
    nombreAtributo: 'Kike'
};

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data);
console.log(entries);
console.log(entries[3][1]);

//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);



const data2 ={
    front:'Alej2',
    back: 'Rel2',
    fronto: 'Si?2',
    design: 'Kike2'
};

//Devolver los valores de un objeto dentro de un arreglo
const values = Object.values(data2);
console.log(values);
console.log(values.length);


//Padding en cadenas
const cadenaN = '123456789';
console.log(cadenaN.padStart(13,'/12/'));