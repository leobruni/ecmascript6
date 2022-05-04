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

