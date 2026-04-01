// 1. DADOS DOS TREINOS (A, B, C, D, E)
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
    "D": [
        { nome: "SUPINO DECLINADO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "REMADA BAIXO TRIANGULO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ELEVAÇÃO LATERAL", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "TRICEPS CORDA", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ROSCA MARTELO", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" }
    ],
    "E": [
        { nome: "MESA FLEXORA", notaFixa: "📌<br> 1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>1 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "LEG PRESS 45", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ADUTORA", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ABDUTORA", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "CADEIRA EXTENSORA UNILATERAL", notaFixa: "📌<br> 1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ]
};

const container = document.getElementById('lista-exercicios');
const seletor = document.getElementById('select-treino');

// 2. RENDERIZAR TREINO NA TELA
function renderizarTreino(tipo) {
    container.innerHTML = '';
    const treino = exerciciosData[tipo];
    if (!treino) return;

    const anterior = JSON.parse(localStorage.getItem(`treino_anterior_${tipo}`)) || [];

    treino.forEach((ex, idx) => {
        const div = document.createElement('div');
        div.className = 'card-exercicio';
        div.innerHTML = `
            <h3>${ex.nome}</h3>
            <p class="nota-fixa">${ex.notaFixa}</p>
            <div id="series-container-${idx}"></div>
            <button class="btn-add-serie" onclick="adicionarSerie(${idx})">+ Adicionar Série</button>
        `;
        container.appendChild(div);
        
        const containerSeries = document.getElementById(`series-container-${idx}`);
        const antEx = anterior[idx];
        
        if (antEx && antEx.series && antEx.series.length > 0) {
            antEx.series.forEach(s => {
                containerSeries.appendChild(criarElementoSerie('', '', '', s.peso, s.reps, s.nota));
            });
        } else {
            containerSeries.appendChild(criarElementoSerie());
        }
    });
    carregarProgressoSeguro(tipo);
}

// 3. CRIAR ELEMENTO DE SÉRIE (HTML)
function criarElementoSerie(peso = '', reps = '', nota = '', pesoAnt = '', repsAnt = '', notaAnt = '', isWS = false, isMR = false) {
    const div = document.createElement('div');
    div.className = 'serie-row';
    
    const pPlaceholder = pesoAnt ? `${pesoAnt} kg` : "Peso";
    const rPlaceholder = repsAnt ? `${repsAnt}` : "Reps";
    const nPlaceholder = notaAnt ? `${notaAnt}` : "Nota";

    div.innerHTML = `
        <div class="serie-controls">
            <label class="check-container ws-label">
                <input type="checkbox" class="ws-check" ${isWS ? 'checked' : ''} onchange="salvarProgresso()">
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

function adicionarSerie(idx) {
    document.getElementById(`series-container-${idx}`).appendChild(criarElementoSerie());
    salvarProgresso();
}

function removerSerie(botao) {
    if (confirm("Excluir esta série?")) {
        botao.parentElement.remove();
        salvarProgresso();
    }
}

// 4. PERSISTÊNCIA (LOCALSTORAGE)
function salvarProgresso() {
    const dadosParaSalvar = [];
    document.querySelectorAll('.card-exercicio').forEach((card) => {
        const nome = card.querySelector('h3').innerText;
        const series = [];
        card.querySelectorAll('.serie-row').forEach(row => {
            const inputs = row.querySelectorAll('input[type="number"], input[type="text"]');
            series.push({
                peso: inputs[0].value,
                reps: inputs[1].value,
                nota: inputs[2].value,
                isWorkSet: row.querySelector('.ws-check').checked,
                isMR: row.querySelector('.mr-check').checked
            });
        });
        dadosParaSalvar.push({ nome, series });
    });
    localStorage.setItem(`treino_atual_${seletor.value}`, JSON.stringify(dadosParaSalvar));
}

function carregarProgressoSeguro(tipo) {
    const salvo = localStorage.getItem(`treino_atual_${tipo}`);
    if (!salvo) return;
    const dados = JSON.parse(salvo);
    const cards = document.querySelectorAll('.card-exercicio');
    const anterior = JSON.parse(localStorage.getItem(`treino_anterior_${tipo}`)) || [];

    cards.forEach((card, idx) => {
        const exSalvo = dados[idx];
        if (exSalvo && exSalvo.series && exSalvo.series.length > 0) {
            if (exSalvo.series.some(s => s.peso || s.reps || s.nota)) {
                const sCont = card.querySelector(`[id^="series-container"]`);
                sCont.innerHTML = '';
                exSalvo.series.forEach((s, sIdx) => {
                    const sAnt = (anterior[idx] && anterior[idx].series[sIdx]) ? anterior[idx].series[sIdx] : {};
                    sCont.appendChild(criarElementoSerie(s.peso, s.reps, s.nota, sAnt.peso, sAnt.reps, sAnt.nota, s.isWorkSet, s.isMR));
                });
            }
        }
    });
}

function limparTreinoAtual() {
    if (confirm("Limpar pesos de hoje? (Fantasmas serão mantidos)")) {
        localStorage.removeItem(`treino_atual_${seletor.value}`);
        renderizarTreino(seletor.value);
    }
}

// 5. EXPORTAÇÃO PDF COM VOLUME
function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const tipo = seletor.value;
    const dataStr = new Date().toLocaleDateString('pt-BR');
    let volumeTotal = 0;

    // Cabeçalho do PDF
    doc.setFontSize(18);
    doc.text(`Relatório de Treino: ${seletor.selectedOptions[0].text}`, 10, 20);
    doc.setFontSize(11);
    doc.text(`Data: ${dataStr}`, 10, 28);
    doc.line(10, 32, 200, 32);

    let y = 40;
    const cards = document.querySelectorAll('.card-exercicio');

    cards.forEach(card => {
        const nomeEx = card.querySelector('h3').innerText;
        const rows = card.querySelectorAll('.serie-row');
        
        // Verifica se o exercício tem algum peso ou repetição preenchida (ou placeholder)
        let temConteudo = false;
        rows.forEach(row => {
            const pInp = row.querySelector('.peso-input');
            const rInp = row.querySelector('.reps-input');
            if (pInp.value || rInp.value || pInp.placeholder !== "Peso") temConteudo = true;
        });

        if (temConteudo) {
            doc.setFont("helvetica", "bold");
            doc.text(nomeEx.toUpperCase(), 10, y);
            y += 7;
            doc.setFont("helvetica", "normal");

            rows.forEach((row, i) => {
                // Captura os elementos pelas CLASSES (mais seguro que índice)
                const pInp = row.querySelector('.peso-input');
                const rInp = row.querySelector('.reps-input');
                const nInp = row.querySelector('.nota-input');
                const isWS = row.querySelector('.ws-check').checked;
                const isMR = row.querySelector('.mr-check').checked;

                // Lógica de valor real vs placeholder
                let pStr = pInp.value || pInp.getAttribute('placeholder') || "0";
                let rStr = rInp.value || rInp.getAttribute('placeholder') || "0";

                // Limpeza para garantir que vire número (remove "kg" e espaços)
                const pNum = parseFloat(pStr.toString().replace(/[^0-9.]/g, '')) || 0;
                const rNum = parseInt(rStr.toString().replace(/[^0-9]/g, '')) || 0;
                const nota = nInp.value || '-';

                // CÁLCULO DO VOLUME (Soma todas as séries aqui)
                const volumeSerie = pNum * rNum;
                volumeTotal += volumeSerie;

                // Formatação do prefixo
                const prefixo = isMR ? "[MR]" : (isWS ? "[WS]" : "[  ]");
                doc.text(`${prefixo} Set ${i+1}: ${pNum}kg x ${rNum} reps | Obs: ${nota}`, 15, y);
                
                y += 6;
                if (y > 280) { doc.addPage(); y = 20; }
            });
            y += 4;
        }
    });

    // Rodapé com o Volume Final
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.line(10, y-5, 200, y-5);
    doc.text(`VOLUME TOTAL DO TREINO: ${volumeTotal.toLocaleString('pt-BR')} kg`, 10, y);

    doc.save(`Treino_${tipo}_${dataStr.replace(/\//g,'-')}.pdf`);

    // Alerta de confirmação para você ver se o código novo rodou
    console.log("Volume Total Calculado:", volumeTotal);
    
    // Salva o atual no anterior e limpa
    const atual = localStorage.getItem(`treino_atual_${tipo}`);
    if (atual) {
        localStorage.setItem(`treino_anterior_${tipo}`, atual);
        localStorage.removeItem(`treino_atual_${tipo}`);
    }
    renderizarTreino(tipo);
}

// 6. INICIALIZAÇÃO
seletor.addEventListener('change', (e) => renderizarTreino(e.target.value));
window.onload = () => renderizarTreino("A");