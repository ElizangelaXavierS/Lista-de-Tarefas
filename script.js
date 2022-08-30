const inputTarefa = document.getElementById("tarefa-nova");

function adicionarTarefa(){
    const item = document.createElement("li");

    item.innerHTML = `<li>
    <span>${inputTarefa.value}</span>
    <button class="excluir">x</button>
  </li>`;

    const lista = document.querySelector("#lista");
    lista.appendChild(item);
}


const botao = document.querySelector("#btn-adicionar");
botao.addEventListener("click", adicionarTarefa)