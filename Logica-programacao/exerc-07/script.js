// 7. Receber um número inteiro e mostrar os números pares e ímpares (separados), de 1 até esse inteiro.


const value = window.prompt('Digite um número inteiro:', '10');

const pares = []; // pares
const impares = []; // ímpares

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    } else {
        impares.push(i);
    }
}

console.log('Numeros pares:', pares);
console.log('Numeros ímpares:', impares);

//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

//Para saber se um dado numero é par ou ímpar a melhor maneira é usando o operador modulus/resto, % . Que retorna o resto da divisão de dois numeros.
   // Se n % 2 der resto zero, o numero é par, e impar caso contrário.