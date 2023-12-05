function mostrarModal() {
    document.getElementById('nomeEscola').value = '';
    document.getElementById('enderecoEscola').value = '';
    document.getElementById('contatoEscola').value = '';
    
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function adicionarEscola() {
    var nomeEscola = document.getElementById('nomeEscola').value;
    var enderecoEscola = document.getElementById('enderecoEscola').value;
    var contatoEscola = document.getElementById('contatoEscola').value;
    
    if (nomeEscola && enderecoEscola && contatoEscola) {
        
        var tabela = document.getElementById('tabelaEscolas').getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow(tabela.rows.length);
        var celulaNome = novaLinha.insertCell(0);
        var celulaEndereco = novaLinha.insertCell(1);
        var celulaContato = novaLinha.insertCell(2);

        
        celulaNome.innerHTML = nomeEscola;
        celulaEndereco.innerHTML = enderecoEscola;
        celulaContato.innerHTML = contatoEscola;

        var imagem = document.createElement('img');
            imagem.src = '../imagens/Editor2.png'; 
            imagem.alt = 'Ícone do editor'; 
            imagem.style.float = 'right'

            celulaContato.appendChild(imagem);
        
        fecharModal();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}