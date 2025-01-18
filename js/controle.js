let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa () {
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)) {
        let novoItem = `<div class="item">
            <div class="item-icone">
                <i>○</i>
            </div>
            <div class="item-nome">
                Teste de Tarefa
            </div>
            <div class="item-botao">
                <button class="delete">Deletar</button>
            </div>
        </div>`

        main.innerHTML += novoItem;
    }
}