// 9. Receba a idade de dez pessoas,calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

const inserir = prompt('Digite idades separadas por vírgula:', '');
const valores= inserir.split(',');
console.log('Idades', valores);

let idade = 0;
for(let i=0; i<valores.length; i++) {
    const age = parseInt(valores[i]);
    if (age >= 18) {
        idade ++;
    }
}

console.log('Maiores de idade', idade);

//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.