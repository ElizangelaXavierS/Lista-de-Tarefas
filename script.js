let idTarefa = 0
const inputTarefa = document.getElementById("tarefa-nova");

function adicionarTarefa(){
    const item = document.createElement("li");
    idTarefa++;
    item.id = idTarefa

  item.innerHTML = `
  <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
  <button class="excluir" onclick="excluir(${idTarefa})">x</button>
  `;
   const lista = document.querySelector("#lista");
    lista.appendChild(item);

    inputTarefa.value = ""
    
}

function concluir(itemId) {
  const tarefaSelecionada = document.getElementById(itemId);
  tarefaSelecionada.className = "concluida";
}

const botaoAdicionar = document.querySelector("#btn-adicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);


const botaoLimpar = document.querySelector(".bt")
botaoLimpar.addEventListener("click", limparLista);

function limparLista(){
  const lista = document.querySelector("#lista");
  lista.innerHTML = ""
  
}function excluir (itemId){
  const tarefaSelecionada = document.getElementById(itemId);
  tarefaSelecionada.remove()
}


