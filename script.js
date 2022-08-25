let pessoas = []

//---------------Teclado Enter para Add------------
document.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        add()
    }
});

//--------------Adicionar--------------------------
function add(n1, n2) {
    n1 = document.getElementById("nome").value
    n2 = document.getElementById("idade").value
    if (n1 == "" || n2 == "") {
        alert("Preencha os espaços em branco")
    } else {
        pessoas.push({ Nome: n1, Idade: n2 })
        imprimir()
        limpar()
    }
}

//--------------Ordenar Por Nome--------------------
function OrdenarNom() {
    let pessoasOrd = pessoas.sort(ordNome)
    imprimir()
}

//--------------Ordenar Por Idade-------------------
function OrdenarIda() {
    let pessoasOrd = pessoas.sort(ordIdade)
    imprimir()
}

//---------------Parametros-------------------------
function ordIdade(a, b) {
    return a.Idade - b.Idade;
}
function ordNome(a, b) {
    return a.Nome < b.Nome ? -1 : a.Nome > b.Nome ? 1 : 0;
}

//---------------Imprimir---------------------------
function imprimir() {
    let dadosAnt = document.getElementById("inicio")
    let novo = ""
    //dadosAnt.innerHTML = ""

    for (let i = 0; i < pessoas.length; i++) {
        novo += `<table>
                    <tr>
                    <td class="nomeTela" style="padding: 0 0 0 16px;">${pessoas[i].Nome}</td>
                    <td class="idadeTela "style="text-align: center;">${pessoas[i].Idade} Anos </td>
                    </tr>
                </table>`
    }
    apaceceTable()
    dadosAnt.innerHTML = novo
}

//---------------Limpar os Imputs------------------
function limpar() {
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
}

//---------------Aparecer Tabela------------------
function apaceceTable() {
    document.getElementById("tabela").style.display = 'table';
}






