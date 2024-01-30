btnCadastrar = document.querySelector("#btn-cadastrar");

btnCadastrar.addEventListener("click", function (event) {
    event.preventDefault();
    nome = document.querySelector("#nome").value;
    telefone = document.querySelector("#telefone").value;
    tabela = document.querySelector("#tabela-corpo");
    linha = `<tr><td>${nome}</td><td>${telefone}</td></tr>`;

    if (nome == "" || telefone == "") {
        alert("É necessário preencher todos os campos antes de continuar.");
    } else {
        tabela.innerHTML += linha;
        document.querySelector("#nome").value = "";
        document.querySelector("#telefone").value = "";
    }
});
