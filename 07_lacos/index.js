/*
Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, 
  os elementos do array.
*/

let carro = {
    modelo: 'Uno',
    ano: 1999,
    cor: 'Vermelho',
    kmRodados: 300000
};

let numerosPares = [2, 4, 6, 8, 10];

function listaPropriedades(obj) {
    console.log('\nPropriedades de um objeto:\n');

    for (propriedade in obj) {
        console.log(propriedade);
    }
}

function listaElementos(arr) {
    console.log('\nElementos de um array:\n');

    for (elemento of arr) {
        console.log(elemento);
    }
}

listaPropriedades(carro);
listaElementos(numerosPares);