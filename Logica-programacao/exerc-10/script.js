// 10. Ler o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.

const inserir = prompt('Digite um número inteiro:', '5');

let resultado = '';
for(let i=1; i<=inserir; i++) {
    for(let j=1; j<=inserir; j++) {
        resultado += '*';
    }
    resultado += '\n';
}
console.log(resultado);