function register() {
    let nome = document.getElementById('nome').value;
    if(nome.length > 0) {
        alert(`Cadastro de ${nome} realizado com sucesso!`);
    }
}
