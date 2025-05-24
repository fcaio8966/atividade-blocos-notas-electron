var notas = [];

function salvarNota() {
    // 1. Capturar o valor digitado no textarea
    var elementoTextarea = document.getElementById('notaTexto');
    var valorDotexto = elementoTextarea.value

    // 2. Verificar se o valor não está vazio
    if (valorDotexto) {}
        // 3. Adicionar ao array notas[]
        notas.push(valorDotexto);



    

    carregarNotas();
    console.log(elementoTextarea)
    console.log(valorDotexto)
}

/** NÃO MEXA NA FUNÇÃO CARREGAR NOTAS */
function carregarNotas() {
    const lista = document.getElementById('listaNotas');
    lista.innerHTML = "";

    notas.forEach((nota, index) => {
        const li = document.createElement('li');
        li.textContent = nota;
        lista.appendChild(li);
    });
}
