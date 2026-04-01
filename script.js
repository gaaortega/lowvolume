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
            <div id="series-container-${idx}"></div>
            <button class="btn-add-serie" onclick="adicionarSerie(${idx})">+ Série</button>
        `;
        container.appendChild(div);
        
        const sCont = document.getElementById(`series-container-${idx}`);
        const antEx = anterior[idx];
        if (antEx && antEx.series && antEx.series.length > 0) {
            antEx.series.forEach(s => sCont.appendChild(criarElementoSerie('', '', '', s.peso, s.reps, s.nota, s.isWorkSet, s.isMR)));
        } else {
            sCont.appendChild(criarElementoSerie());
        }
    });
    carregarProgresso(tipo);
}

function criarElementoSerie(peso='', reps='', nota='', pAnt='', rAnt='', nAnt='', isWS=false, isMR=false) {
    const div = document.createElement('div');
    div.className = 'serie-row';
    // O placeholder agora mostra o número puro. O 'kg' é só visual no texto do placeholder.
    const pPlaceholder = pAnt ? pAnt : "Peso";
    const rPlaceholder = rAnt ? rAnt : "Reps";

    div.innerHTML = `
        <div class="serie-controls">
            <label class="check-container ws-label"><input type="checkbox" class="ws-check" ${isWS?'checked':''}><span>WS</span></label>
            <label class="check-container mr-label"><input type="checkbox" class="mr-check" ${isMR?'checked':''}><span>MR</span></label>
        </div>
        <input type="number" class="peso-input" placeholder="${pPlaceholder}" value="${peso}" step="any">
        <input type="number" class="reps-input" placeholder="${rPlaceholder}" value="${reps}">
        <input type="text" class="nota-input" placeholder="${nAnt||'Nota'}" value="${nota}">
        <button class="btn-delete-serie" onclick="removerSerie(this)">×</button>
    `;
    
    // Salva automaticamente em qualquer mudança nos inputs ou checks
    div.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', salvarProgresso);
    });
    
    return div;
}

function adicionarSerie(idx) {
    document.getElementById(`series-container-${idx}`).appendChild(criarElementoSerie());
    salvarProgresso();
}

function removerSerie(btn) {
    if(confirm("Excluir série?")) {
        btn.parentElement.remove();
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
        if (salvo[idx] && salvo[idx].series) {
            const sCont = card.querySelector(`[id^="series-container"]`);
            sCont.innerHTML = '';
            salvo[idx].series.forEach(s => {
                sCont.appendChild(criarElementoSerie(s.peso, s.reps, s.nota, '', '', '', s.isWorkSet, s.isMR));
            });
        }
    });
}

function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    let volumeTotal = 0;
    let y = 40;

    doc.setFontSize(16);
    doc.text(`Treino: ${seletor.selectedOptions[0].text}`, 10, 20);
    doc.setFontSize(11);
    doc.text(`Data: ${dataAtual}`, 10, 28);
    doc.line(10, 32, 200, 32);

    document.querySelectorAll('.card-exercicio').forEach(card => {
        const nome = card.querySelector('h3').innerText;
        const rows = card.querySelectorAll('.serie-row');
        
        let exercicioTemDados = false;
        rows.forEach(row => {
            if(row.querySelector('.peso-input').value || row.querySelector('.peso-input').placeholder !== "Peso") exercicioTemDados = true;
        });

        if(exercicioTemDados) {
            doc.setFont("helvetica", "bold");
            doc.text(nome, 10, y); y += 7;
            doc.setFont("helvetica", "normal");

            rows.forEach((row, i) => {
                const pInp = row.querySelector('.peso-input');
                const rInp = row.querySelector('.reps-input');
                
                // Pega valor real ou placeholder
                let vPeso = parseFloat(pInp.value) || parseFloat(pInp.placeholder) || 0;
                let vReps = parseInt(rInp.value) || parseInt(rInp.placeholder) || 0;

                const vVolume = vPeso * vReps;
                volumeTotal += vVolume;

                const isMR = row.querySelector('.mr-check').checked;
                const isWS = row.querySelector('.ws-check').checked;
                const status = isMR ? "[MR]" : (isWS ? "[WS]" : "[  ]");
                
                doc.text(`${status} Set ${i+1}: ${vPeso}kg x ${vReps} reps`, 15, y);
                y += 6;
                if(y > 275){ doc.addPage(); y = 20; }
            });
            y += 4;
        }
    });

    doc.setFont("helvetica", "bold");
    doc.text(`VOLUME TOTAL: ${volumeTotal.toLocaleString('pt-BR')} kg`, 10, y + 10);
    
    doc.save(`Treino_${seletor.value}_${dataAtual.replace(/\//g,'-')}.pdf`);
    
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