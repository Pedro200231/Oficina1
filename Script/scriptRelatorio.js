    function limparPesquisa() {
        document.getElementById('dataInicio').value = '';
        document.getElementById('dataFim').value = '';
    }

    // Função para realizar a busca de dados
    function procurar() {
        // Simulação de dados fictícios
        const dadosFicticios = [
            { nome: 'Aluno 1', nota: 7.5 },
            { nome: 'Aluno 2', nota: 8.2 },
            { nome: 'Aluno 3', nota: 6.8 },
            { nome: 'Aluno 4', nota: 9.0 },
            { nome: 'Aluno 5', nota: 7.3 },
        ];

        // Preencher o relatório de notas
        const relatorioNotas = document.getElementById('relatorioNotas');
        dadosFicticios.forEach(aluno => {
            relatorioNotas.innerHTML += `<p class="nota">${aluno.nome}: ${aluno.nota}</p>`;
        });

        // Preencher o gráfico
        const grafico = document.getElementById('grafico');
        dadosFicticios.forEach(aluno => {
            const barra = document.createElement('div');
            barra.className = 'barra-grafico';
            barra.style.width = `${aluno.nota * 10}%`;
            grafico.appendChild(barra);
        });
    }