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

function renderizarTreino(tipo) {
    container.innerHTML = '';
    const treino = exerciciosData[tipo];
    const anterior = JSON.parse(localStorage.getItem(`treino_anterior_${tipo}`)) || [];

    treino.forEach((ex, idx) => {
        const div = document.createElement('div');
        div.className = 'card-exercicio';
        div.innerHTML = `<h3>${ex.nome}</h3><p class="nota-fixa">${ex.notaFixa}</p><div id="series-container-${idx}"></div><button class="btn-add-serie" onclick="adicionarSerie(${idx})">+ Série</button>`;
        container.appendChild(div);
        
        const sCont = document.getElementById(`series-container-${idx}`);
        const antEx = anterior[idx];
        if (antEx && antEx.series.length > 0) {
            antEx.series.forEach(s => sCont.appendChild(criarElementoSerie('', '', '', s.peso, s.reps, s.nota)));
        } else { sCont.appendChild(criarElementoSerie()); }
    });
    carregarProgresso(tipo);
}

function criarElementoSerie(peso='', reps='', nota='', pAnt='', rAnt='', nAnt='', isWS=false, isMR=false) {
    const div = document.createElement('div');
    div.className = 'serie-row';
    div.innerHTML = `
        <div class="serie-controls">
            <label class="check-container ws-label"><input type="checkbox" class="ws-check" ${isWS?'checked':''} onchange="salvarProgresso()">WS</label>
            <label class="check-container mr-label"><input type="checkbox" class="mr-check" ${isMR?'checked':''} onchange="salvarProgresso()">MR</label>
        </div>
        <input type="number" class="peso-input" placeholder="${pAnt||'Peso'}" value="${peso}" oninput="salvarProgresso()">
        <input type="number" class="reps-input" placeholder="${rAnt||'Reps'}" value="${reps}" oninput="salvarProgresso()">
        <input type="text" class="nota-input" placeholder="${nAnt||'Nota'}" value="${nota}" oninput="salvarProgresso()">
        <button class="btn-delete-serie" onclick="removerSerie(this)">×</button>`;
    return div;
}

function adicionarSerie(idx) { document.getElementById(`series-container-${idx}`).appendChild(criarElementoSerie()); salvarProgresso(); }
function removerSerie(btn) { if(confirm("Excluir?")){ btn.parentElement.remove(); salvarProgresso(); } }

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
        if (salvo[idx] && salvo[idx].series.length > 0) {
            const sCont = card.querySelector(`[id^="series-container"]`);
            sCont.innerHTML = '';
            salvo[idx].series.forEach(s => sCont.appendChild(criarElementoSerie(s.peso, s.reps, s.nota, '', '', '', s.isWorkSet, s.isMR)));
        }
    });
}

function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let volumeTotal = 0;
    let y = 40;

    doc.text(`Treino: ${seletor.value}`, 10, 20);
    
    document.querySelectorAll('.card-exercicio').forEach(card => {
        const nome = card.querySelector('h3').innerText;
        const rows = card.querySelectorAll('.serie-row');
        doc.setFont("helvetica", "bold");
        doc.text(nome, 10, y); y += 7;
        doc.setFont("helvetica", "normal");

        rows.forEach((row, i) => {
            const pInp = row.querySelector('.peso-input');
            const rInp = row.querySelector('.reps-input');
            
            // Lógica para pegar valor real ou placeholder
            let pVal = pInp.value || pInp.getAttribute('placeholder') || "0";
            let rVal = rInp.value || rInp.getAttribute('placeholder') || "0";

            // Limpeza absoluta de caracteres não numéricos
            let pNum = parseFloat(pVal.toString().replace(/[^0-9.]/g, '')) || 0;
            let rNum = parseInt(rVal.toString().replace(/[^0-9]/g, '')) || 0;

            volumeTotal += (pNum * rNum);

            const status = row.querySelector('.mr-check').checked ? "[MR]" : (row.querySelector('.ws-check').checked ? "[WS]" : "[  ]");
            doc.text(`${status} Set ${i+1}: ${pNum}kg x ${rNum} reps`, 15, y);
            y += 6;
            if(y > 270){ doc.addPage(); y = 20; }
        });
        y += 5;
    });

    doc.setFont("helvetica", "bold");
    doc.text(`VOLUME TOTAL: ${volumeTotal} kg`, 10, y + 10);
    doc.save("treino.pdf");
    
    alert("Volume Calculado: " + volumeTotal + " kg");
    
    localStorage.setItem(`treino_anterior_${seletor.value}`, localStorage.getItem(`treino_atual_${seletor.value}`));
    localStorage.removeItem(`treino_atual_${seletor.value}`);
    renderizarTreino(seletor.value);
}

function limparTreinoAtual() { if(confirm("Limpar?")){ localStorage.removeItem(`treino_atual_${seletor.value}`); renderizarTreino(seletor.value); } }
seletor.onchange = () => renderizarTreino(seletor.value);
window.onload = () => renderizarTreino("A");