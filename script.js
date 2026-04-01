// 1. SEUS DADOS DE TREINO (Simulando a Planilha)
const exerciciosData = {
    "A": [
        { nome: "SUPINO RETO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "SUPINO INCLINADO", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "VOADOR", notaFixa: "📌<br> MUSCLE ROUND (CARGA PARA 12-15 REPS).<br>6 BLOCOS DE 4 REPS (10-15 SEG DESCANSO)" },
        { nome: "DESENVOLVIMENTO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>1 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ELEVAÇÃO LATERAL", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "TRICEPS POLIA (BARRA)", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ],
    "B": [
        { nome: "PUXADA ALTA", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "REMADA BAIXA UNILATERAL", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "PULLDOWN", notaFixa: "📌<br> MUSCLE ROUND (CARGA PARA 12-15 REPS).<br>6 BLOCOS DE 4 REPS (10-15 SEG DESCANSO)" },
        { nome: "ROSCA SCOTT", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ROSCA BANCO 45", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" }
    ],
    "C": [
        { nome: "MESA FLEXORA", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "AGACHAMENTO PÊNDULO", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "CADEIRA EXTENSORA", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "PANTURRILHA", notaFixa: "📌<br> 1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ],
    "D": [ // Upper
        { nome: "SUPINO DECLINADO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "REMADA BAIXO TRIANGULO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ELEVAÇÃO LATERAL", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "TRICEPS CORDA", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ROSCA MARTELO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" }
    ],
    "E": [ // Lower
        { nome: "MESA FLEXORA", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>1 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "LEG PRESS 45", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ADUTORA", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ABDUTORA", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "CADEIRA EXTENSORA UNILATERAL", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ]
};

const container = document.getElementById('lista-exercicios');
const seletor = document.getElementById('select-treino');

// 2. FUNÇÃO QUE DESENHA OS EXERCÍCIOS NA TELA
function criarElementoSerie(peso = '', reps = '', nota = '', pesoAnt = '', repsAnt = '', notaAnt = '', isWorkSet = false, isMR = false) {
    const div = document.createElement('div');
    div.className = 'serie-row';
    
    const pPlaceholder = pesoAnt ? `${pesoAnt} kg` : "Peso";
    const rPlaceholder = repsAnt ? `${repsAnt}` : "Reps";
    const nPlaceholder = notaAnt ? `${notaAnt}` : "Nota da série";

    div.innerHTML = `
        <div class="serie-controls">
            <label class="check-container ws-label">
                <input type="checkbox" class="ws-check" ${isWorkSet ? 'checked' : ''} onchange="salvarProgresso()">
                <span>WS</span>
            </label>
            <label class="check-container mr-label">
                <input type="checkbox" class="mr-check" ${isMR ? 'checked' : ''} onchange="salvarProgresso()">
                <span>MR</span>
            </label>
        </div>
        <input type="number" placeholder="${pPlaceholder}" value="${peso}" oninput="salvarProgresso()" class="peso-input">
        <input type="number" placeholder="${rPlaceholder}" value="${reps}" oninput="salvarProgresso()" class="reps-input">
        <input type="text" placeholder="${nPlaceholder}" value="${nota}" oninput="salvarProgresso()" class="nota-input">
        <button class="btn-delete-serie" onclick="removerSerie(this)">×</button>
    `;
    return div;
}

// Função para remover a série específica
function removerSerie(botao) {
    if (confirm("Deseja excluir esta série?")) {
        botao.parentElement.remove();
        salvarProgresso();
    }
}

function renderizarTreino(tipo) {
    container.innerHTML = ''; // Limpa a tela antes de desenhar
    const treino = exerciciosData[tipo];

    if (!treino) {
        container.innerHTML = "<p style='color:#aaa;'>Selecione um treino válido.</p>";
        return;
    }

    // Busca o treino ANTERIOR para usar como placeholder (fantasma)
    const anterior = JSON.parse(localStorage.getItem(`treino_anterior_${tipo}`)) || [];

    treino.forEach((ex, idx) => {
        const div = document.createElement('div');
        div.className = 'card-exercicio';
        div.innerHTML = `
            <h3>${ex.nome}</h3>
            <p class="nota-fixa">${ex.notaFixa}</p>
            <div id="series-container-${idx}">
                </div>
            <button class="btn-add-serie" onclick="adicionarSerie(${idx})">+ Adicionar Série</button>
        `;
        container.appendChild(div);
        
        // Determina se devemos criar linhas baseadas no treino anterior ou uma linha vazia padrão
        const containerSeries = document.getElementById(`series-container-${idx}`);
        
        if (anterior[idx] && anterior[idx].series && anterior[idx].series.length > 0) {
            // Se houver dados anteriores, cria as linhas baseadas neles
            anterior[idx].series.forEach(s => {
                containerSeries.appendChild(criarElementoSerie('', '', '', s.peso, s.reps, s.nota));
            });
        } else {
            // Se for o primeiro treino, cria uma linha vazia padrão
            containerSeries.appendChild(criarElementoSerie());
        }
    });

    // Tenta carregar o progresso atual, se houver (seguro)
    carregarProgressoSeguro(tipo);
}

// 3. AUXILIAR PARA CRIAR A LINHA DA SÉRIE COM PLACEHOLDERS
function criarElementoSerie(peso = '', reps = '', nota = '', pesoAnt = '', repsAnt = '', notaAnt = '') {
    const div = document.createElement('div');
    div.className = 'serie-row';
    
    // Definição dos placeholders (fantasma)
    const pPlaceholder = pesoAnt ? `${pesoAnt} kg` : "Peso";
    const rPlaceholder = repsAnt ? `${repsAnt}` : "Reps";
    const nPlaceholder = notaAnt ? `${notaAnt}` : "Nota da série";

    // NOVO HTML: Adicionamos o checkbox e demos um 'ref' para Peso, Reps, Nota
    div.innerHTML = `
        <label class="check-container">
            <input type="checkbox" onchange="salvarProgresso()">
            <span>WS</span>
        </label>
        <input type="number" placeholder="${pPlaceholder}" value="${peso}" oninput="salvarProgresso()" class="peso-input">
        <input type="number" placeholder="${rPlaceholder}" value="${reps}" oninput="salvarProgresso()" class="reps-input">
        <input type="text" placeholder="${nPlaceholder}" value="${nota}" oninput="salvarProgresso()" class="nota-input">
    `;
    return div;
}

// 4. ADICIONAR SÉRIE MANUALMENTE
function adicionarSerie(idx) {
    const sContainer = document.getElementById(`series-container-${idx}`);
    sContainer.appendChild(criarElementoSerie());
    salvarProgresso(); // Salva a estrutura nova (quantidade de séries)
}

// 5. SALVAMENTO AUTOMÁTICO (LocalStorage)
function salvarProgresso() {
    const dadosParaSalvar = [];
    const cards = document.querySelectorAll('.card-exercicio');

    cards.forEach((card) => {
        const nome = card.querySelector('h3').innerText;
        const series = [];
        card.querySelectorAll('.serie-row').forEach(row => {
            const wsCheck = row.querySelector('.ws-check').checked;
            const mrCheck = row.querySelector('.mr-check').checked;
            const inputs = row.querySelectorAll('input[type="number"], input[type="text"]');
            
            series.push({
                peso: inputs[0].value,
                reps: inputs[1].value,
                nota: inputs[2].value,
                isWorkSet: wsCheck,
                isMR: mrCheck
            });
        });
        dadosParaSalvar.push({ nome, series });
    });

    localStorage.setItem(`treino_atual_${seletor.value}`, JSON.stringify(dadosParaSalvar));
}

function limparTreinoAtual() {
    if (confirm("Deseja limpar todos os pesos digitados hoje? Isso não apagará o histórico (fantasmas).")) {
        const tipo = seletor.value;
        localStorage.removeItem(`treino_atual_${tipo}`);
        renderizarTreino(tipo);
    }
}

// 6. CARREGAR PROGRESSO ATUAL (Ajustado para não dar erro se estiver em branco)
function carregarProgressoSeguro(tipo) {
    const salvo = localStorage.getItem(`treino_atual_${tipo}`);
    if (!salvo) return; // Se não houver nada salvo, não faz nada. Não quebra o site.

    let dados;
    try {
        dados = JSON.parse(salvo);
    } catch (e) {
        console.error("Erro ao ler progresso salvo", e);
        return;
    }

    const cards = document.querySelectorAll('.card-exercicio');
    if (!dados || dados.length === 0 || cards.length === 0) return;

    // Busca o treino anterior (fantasminha) para garantir os placeholders
    const anterior = JSON.parse(localStorage.getItem(`treino_anterior_${tipo}`)) || [];

    cards.forEach((card, idx) => {
        const exercicioSalvo = dados[idx];
        if (exercicioSalvo && exercicioSalvo.series && exercicioSalvo.series.length > 0) {
            // Só sobrescreve se houver pelo menos um valor real digitado hoje
            const temConteudo = exercicioSalvo.series.some(s => s.peso || s.reps || s.nota);
            
            if (temConteudo) {
                const sCont = card.querySelector(`[id^="series-container"]`);
                sCont.innerHTML = ''; // Limpa a série padrão para colocar o que foi salvo hoje

                exercicioSalvo.series.forEach((s, sIdx) => {
                    // Tenta achar o valor anterior correspondente para o placeholder
                    const sAnt = (anterior[idx] && anterior[idx].series[sIdx]) ? anterior[idx].series[sIdx] : {};
                    sCont.appendChild(criarElementoSerie(s.peso, s.reps, s.nota, sAnt.peso, sAnt.reps, sAnt.nota));
                });
            }
        }
    });
}

// 7. FINALIZAR E GERAR PDF
function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const treinoNome = seletor.selectedOptions[0].text;
    const tipo = seletor.value;
    let volumeTotalTreino = 0;

    // Cabeçalho ... (mesmo código anterior) ...

    cards.forEach((card) => {
        const nomeEx = card.querySelector('h3').innerText;
        const seriesRows = card.querySelectorAll('.serie-row');
        let temConteudo = false;

        // Primeiro passamos para verificar conteúdo e calcular volume do exercício
        seriesRows.forEach(row => {
            const inputs = row.querySelectorAll('input[type="number"]');
            if (inputs[0].value || inputs[1].value) temConteudo = true;
        });

        if (temConteudo) {
            doc.setFont("helvetica", "bold");
            doc.text(nomeEx.toUpperCase(), 10, y);
            y += 8;

            doc.setFont("helvetica", "normal");
            seriesRows.forEach((serie, index) => {
                const isWS = serie.querySelector('.ws-check').checked;
                const isMR = serie.querySelector('.mr-check').checked;
                const inputs = serie.querySelectorAll('input[type="number"], input[type="text"]');

                const pFinal = inputs[0].value || inputs[0].getAttribute('placeholder').replace('kg', '').trim() || '0';
                const rFinal = inputs[1].value || inputs[1].getAttribute('placeholder').trim() || '0';
                const nota = inputs[2].value || '-';

                // Cálculo de Volume
                volumeTotalTreino += (parseFloat(pFinal) * parseInt(rFinal));

                const prefixo = isMR ? "[MR]" : (isWS ? "[WS]" : "[  ]");
                const textoLinha = `${prefixo} Set ${index + 1}: ${pFinal} kg x ${rFinal} reps | Obs: ${nota}`;
                
                doc.text(textoLinha, 15, y);
                y += 7;
                if (y > 270) { doc.addPage(); y = 20; }
            });
            y += 5;
        }
    });

    // Rodapé com Volume Total
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.line(10, y, 200, y);
    y += 10;
    doc.text(`VOLUME TOTAL DO TREINO: ${volumeTotalTreino.toLocaleString()} kg`, 10, y);

    doc.save(`Treino_${tipo}_${dataAtual.replace(/\//g, '-')}.pdf`);
    
    // Lógica de salvar histórico e limpar atual ... (mesmo código) ...

    // Mógica de salvar para o histórico "Fantasma"
    const dadosAtuais = localStorage.getItem(`treino_atual_${tipo}`);
    if (dadosAtuais) {
        localStorage.setItem(`treino_anterior_${tipo}`, dadosAtuais);
        localStorage.removeItem(`treino_atual_${tipo}`);
    }

    alert("PDF Gerado com Sucesso!");
    renderizarTreino(tipo);
}

// 8. EVENT LISTENERS
seletor.addEventListener('change', (e) => {
    // Quando muda o treino, renderiza o novo do zero.
    // A função renderizarTreino já chama internamente o carregarProgressoSeguro
    renderizarTreino(e.target.value);
});

// Inicialização (Quando a página abre pela primeira vez)
window.onload = () => {
    // Desenha o treino A automaticamente para não ficar em branco
    renderizarTreino("A");
};