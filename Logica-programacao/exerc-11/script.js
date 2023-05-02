// 10. Receba a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos.

const inserir = prompt('Digite um número inteiro:', '5');

let resultado = '';
for(let i=1; i<=inserir; i++) {
    for(let j=1; j<=i; j++) {
        resultado += '*';
    }
    resultado += '\n';
}
console.log(resultado);