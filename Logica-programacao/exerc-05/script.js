// 5. Mostrar as tabuadas dos números de 1 a 10 usando laços de repetição.

for (let i=1; i<=10; i++) {
    console.log(`Tabuada de ${i}`);
    for (let j=1; j<=10; j++) {
        const result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
    console.log('');
}

// console.log = Exibe uma mensagem na console do navegador.
