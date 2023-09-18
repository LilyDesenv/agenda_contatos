const form = document.getElementById('form-contatos');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    attTabela();
});

function addLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('num-contato');
//Verifico se o nome e o número já estão na lista obs: podem existir contatos com nomes iguais, mas não com o mesmo número
    console.log(inputNomeContato);
    if(nomes.includes(inputNomeContato.value) && numeros.includes(inputNumeroContato.value) ){
        alert(`O contato de ${inputNomeContato.value} já foi inserido!`)
    }else if(numeros.includes(inputNumeroContato.value)){
        alert(`O número ${inputNumeroContato.value} já foi inserido!`)
    }else{
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += '<td><img src="./imagens/user.png"/></td>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        console.log(linhas)
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}