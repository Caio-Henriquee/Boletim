function exibirBoletim() {
    const nome = document.getElementById('nome').value;
    const nota = parseFloat(document.getElementById('nota').value);
    const curso = document.getElementById('curso').value;
    const situacao = calcularSituacao(nota);
  
    document.getElementById('boletim-nome').textContent = nome;
    document.getElementById('boletim-nota').textContent = nota.toFixed(1);
    document.getElementById('boletim-situacao').textContent = situacao;
  
    document.getElementById('boletim').classList.remove('hidden');
    return false;
  }
  
  function calcularSituacao(nota) {
    if (nota >= 60) {
      return 'Aprovado';
    } else if (nota < 40) {
      return 'Reprovado';
    } else {
      return 'Recuperação';
    }
  }
  