const exerciciosData = {
    "A": [
        { nome: "SUPINO RETO", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "SUPINO INCLINADO", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "VOADOR", notaFixa: "MUSCLE ROUND (CARGA PARA 12-15 REPS).<br>6 BLOCOS DE 4 REPS (10-15 SEG DESCANSO)" },
        { nome: "DESENVOLVIMENTO", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>1 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ELEVAÇÃO LATERAL", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "TRICEPS POLIA (BARRA)", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ],
    "B": [
        { nome: "PUXADA ALTA", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "REMADA BAIXA UNILATERAL", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "PULLDOWN", notaFixa: "MUSCLE ROUND (CARGA PARA 12-15 REPS).<br>6 BLOCOS DE 4 REPS (10-15 SEG DESCANSO)" },
        { nome: "ROSCA SCOTT", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ROSCA BANCO 45", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" }
    ],
    "C": [
        { nome: "MESA FLEXORA", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "AGACHAMENTO PÊNDULO", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "CADEIRA EXTENSORA", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "PANTURRILHA", notaFixa: "1 OU 2 SÉRIES RECONHECIMENTO (4-6) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ],
    "D": [
        { nome: "SUPINO DECLINADO", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "REMADA BAIXO TRIANGULO", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ELEVAÇÃO LATERAL", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "TRICEPS CORDA", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" },
        { nome: "ROSCA MARTELO", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIES DE TRABALHO (5 A 9)" }
    ],
    "E": [
        { nome: "MESA FLEXORA", notaFixa: "1 SÉRIE AQUECIMENTO (12-15) LONGE DA FALHA.<br>1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>1 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "LEG PRESS 45", notaFixa: "1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ADUTORA", notaFixa: "1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "ABDUTORA", notaFixa: "1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" },
        { nome: "CADEIRA EXTENSORA UNILATERAL", notaFixa: "1-2 SÉRIE PREPARATÓRIA (6-8) LONGE DA FALHA.<br>2 SÉRIE DE TRABALHO (5 A 9)" }
    ]
};

const container = document.getElementById('lista-exercicios');
const seletor = document.getElementById('select-treino');

function renderizarTreino(tipo) {
    container.innerHTML = '';
    const treino = exerciciosData[tipo];
    const anterior = JSON.parse(localStorage.getItem(`treino_anterior_${tipo}`)) || [];

    treino.forEach((ex, idx) => {
        const div = document.createElement('div');
        div.className = 'card-exercicio';
        div.innerHTML = `
            <h3>${ex.nome}</h3>
            <p class="nota-fixa">${ex.notaFixa}</p>
            <div id="series-container-${idx}" class="series-list-container"></div>
            <button class="btn-add-serie" onclick="adicionarSerie(${idx})">+ Série</button>
        `;
        container.appendChild(div);
        
        const sCont = document.getElementById(`series-container-${idx}`);
        const antEx = anterior[idx];
        
        if (antEx && antEx.series && antEx.series.length > 0) {
            antEx.series.forEach(s => {
                // Ao carregar do anterior, limpamos os valores atuais para não misturar (o erro da Imagem 2)
                sCont.appendChild(criarElementoSerie('', '', '', s.peso, s.reps, s.nota, s.isWorkSet, s.isMR));
            });
        } else {
            sCont.appendChild(criarElementoSerie());
        }
    });
    carregarProgresso(tipo);
}

// FUNÇÃO ATUALIZADA: Novo HTML para bater com o layout da Imagem 3
function criarElementoSerie(peso='', reps='', nota='', pAnt='', rAnt='', nAnt='', isWS=false, isMR=false) {
    const div = document.createElement('div');
    div.className = 'serie-row';
    
    // Fallback seguro para placeholders, removendo 'kg' se existir
    const pPlaceholder = pAnt ? pAnt.toString().replace(/kg/gi, '').trim() : "Peso";
    const rPlaceholder = rAnt || "Reps";

    div.innerHTML = `
        <div class="serie-main-controls">
            <div class="serie-checks-group">
                <label class="check-container mr-label">
                    <input type="checkbox" class="mr-check" ${isMR?'checked':''} onchange="salvarProgresso()">
                    <span>MR</span>
                </label>
                <label class="check-container ws-label">
                    <input type="checkbox" class="ws-check" ${isWS?'checked':''} onchange="salvarProgresso()">
                    <span>WS</span>
                </label>
            </div>
            
            <input type="number" class="peso-input" placeholder="${pPlaceholder}" value="${peso}" oninput="salvarProgresso()" inputmode="decimal">
            <input type="number" class="reps-input" placeholder="${rPlaceholder}" value="${reps}" oninput="salvarProgresso()" inputmode="numeric">
            
            <button class="btn-delete-serie" onclick="removerSerie(this)">×</button>
        </div>
        
        <input type="text" class="nota-input" placeholder="${nAnt||'Nota'}" value="${nota}" oninput="salvarProgresso()">
    `;
    return div;
}

function adicionarSerie(idx) {
    document.getElementById(`series-container-${idx}`).appendChild(criarElementoSerie());
    salvarProgresso();
}

function removerSerie(btn) {
    if(confirm("Excluir esta série?")){
        btn.closest('.serie-row').remove();
        salvarProgresso();
    }
}

function salvarProgresso() {
    const dados = [];
    document.querySelectorAll('.card-exercicio').forEach(card => {
        const series = [];
        card.querySelectorAll('.serie-row').forEach(row => {
            series.push({
                peso: row.querySelector('.peso-input').value,
                reps: row.querySelector('.reps-input').value,
                nota: row.querySelector('.nota-input').value,
                isWorkSet: row.querySelector('.ws-check').checked,
                isMR: row.querySelector('.mr-check').checked
            });
        });
        dados.push({ series });
    });
    localStorage.setItem(`treino_atual_${seletor.value}`, JSON.stringify(dados));
}

function carregarProgresso(tipo) {
    const salvo = JSON.parse(localStorage.getItem(`treino_atual_${tipo}`));
    if (!salvo) return;
    const cards = document.querySelectorAll('.card-exercicio');
    cards.forEach((card, idx) => {
        if (salvo[idx] && salvo[idx].series && salvo[idx].series.length > 0) {
            const sCont = card.querySelector(`[id^="series-container"]`);
            if(sCont){
                sCont.innerHTML = '';
                salvo[idx].series.forEach(s => {
                    sCont.appendChild(criarElementoSerie(s.peso, s.reps, s.nota, '', '', '', s.isWorkSet, s.isMR));
                });
            }
        }
    });
}

// PDF ATUALIZADO: Nota embaixo da série, fonte melhorada
function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    
    // Fontes base do jsPDF (não arredondadas, mas mais limpas)
    doc.setFont("helvetica", "normal");
    
    let volumeTotalGeral = 0; 
    let y = 40;

    // Cabeçalho
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(`Relatório: ${seletor.selectedOptions[0].text}`, 10, 20);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Data: ${dataAtual}`, 10, 28);
    doc.line(10, 32, 200, 32);

    document.querySelectorAll('.card-exercicio').forEach(card => {
        const nomeEx = card.querySelector('h3').innerText;
        const rows = card.querySelectorAll('.serie-row');
        
        // Verifica se há dados antes de imprimir o nome do exercício
        let temConteudo = false;
        rows.forEach(row => {
            const pField = row.querySelector('.peso-input');
            if(pField.value || (pField.placeholder && pField.placeholder !== "Peso")) temConteudo = true;
        });

        if(!temConteudo) return; // Pula exercício vazio

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        if(y > 260) { doc.addPage(); y = 20; }
        doc.text(nomeEx, 10, y); y += 8;
        
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");

        rows.forEach((row, i) => {
            const pField = row.querySelector('.peso-input');
            const rField = row.querySelector('.reps-input');
            const nField = row.querySelector('.nota-input'); // Campo Nota
            const isMR = row.querySelector('.mr-check').checked;
            const isWS = row.querySelector('.ws-check').checked;

            // Lógica blindada: Prioridade total para o valor digitado (.value)
            let pVal = pField.value || pField.placeholder || "0";
            let rVal = rField.value || rField.placeholder || "0";
            const obs = nField.value; // Valor da Nota

            // Limpeza absoluta de caracteres não numéricos
            let pNum = parseFloat(pVal.toString().replace(/[^0-9.]/g, '')) || 0;
            let rNum = parseInt(rVal.toString().replace(/[^0-9]/g, '')) || 0;

            // REGRA DO MUSCLE ROUND automática
            if (isMR) { rNum = 24; }

            // Cálculo do volume (sempre kg * reps)
            let volSerie = pNum * rNum;
            volumeTotalGeral += volSerie;

            // Status Prefix
            const status = isMR ? "[MR]" : (isWS ? "[WS]" : "[  ]");
            const repsTexto = isMR ? "24 reps (6x4)" : `${rNum} reps`;
            
            // Verificação de quebra de página antes de imprimir a série completa
            let espacoNecessario = obs ? 12 : 6;
            if(y > (285 - espacoNecessario)) { doc.addPage(); y = 20; }

            // Imprime a linha da Série
            doc.text(`${status} Set ${i+1}: ${pNum}kg x ${repsTexto}`, 15, y);
            y += 6;

            // AJUSTE: Imprime a Nota (Obs) embaixo da série, se existir
            if (obs && obs.trim() !== "") {
                doc.setFont("helvetica", "italic");
                doc.setTextColor(100, 100, 100); // Cinza para a nota
                doc.text(`   Obs: ${obs}`, 15, y);
                doc.setTextColor(0, 0, 0); // Volta pro preto
                doc.setFont("helvetica", "normal");
                y += 6;
            }
        });
        y += 6; // Espaço entre exercícios
    });

    // Resultado Final
    if(y > 270) { doc.addPage(); y = 20; }
    y += 5;
    doc.line(10, y-5, 200, y-5);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(`VOLUME TOTAL: ${volumeTotalGeral.toLocaleString('pt-BR')} kg`, 10, y + 5);
    
    doc.save(`Treino_${seletor.value}_${dataAtual.replace(/\//g,'-')}.pdf`);

    // Backup e Reset
    localStorage.setItem(`treino_anterior_${seletor.value}`, localStorage.getItem(`treino_atual_${seletor.value}`));
    localStorage.removeItem(`treino_atual_${seletor.value}`);
    renderizarTreino(seletor.value);
}

function limparTreinoAtual() {
    if(confirm("Limpar treino de hoje?")){
        localStorage.removeItem(`treino_atual_${seletor.value}`);
        renderizarTreino(seletor.value);
    }
}

seletor.onchange = () => renderizarTreino(seletor.value);
window.onload = () => renderizarTreino("A");