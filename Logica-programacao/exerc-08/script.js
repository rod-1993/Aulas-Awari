// 8. Receber 5 idades, calcule e mostre a média das idades digitadas.

const inserir = prompt('Digite idades separadas por vírgula:', '');
const valor = inserir.split(',');
console.log('Idades', valor);

let total = 0;
for(let i=0; i<valor.length; i++) {
    total += parseInt(valor[i]);
}

const media = total / valor.length;
console.log('Média', media);

//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.