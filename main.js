const form = document.getElementById("form-adicionar")
const btnAdicionar = document.getElementById("btn-adicionar")
const btnFechar = document.getElementById("btn-fechar")
const formMenu = document.getElementById("form-menu")
const nomeContato = document.getElementById(`nome-contato`)
const telefoneContato = document.getElementById(`telefone-contato`)
const tableContatos = document.getElementById(`table-contatos`)
const nomesArray = []
const telefoneArray = []
let linhas = ''


function adicionarLinhas() {
    let linha = `<tr>`
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${telefoneContato.value}</td>`
    linha += `</tr>`
    linhas += linha
    tableContatos.innerHTML= linhas
}

function pushInfo() {
    telefoneArray.push(telefoneContato.value)
    nomesArray.push(nomeContato.value)
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    if(telefoneArray.includes(telefoneContato.value)) {
        alert("Este contato já foi resgistrado!")
    } else {
        pushInfo()
        adicionarLinhas()
        nomeContato.value = ""
        telefoneContato.value = ""
    }
})

btnFechar.addEventListener('click', function(e) {
    formMenu.style.display = 'none'
    nomeContato.value = ''
    telefoneContato.value = ''
})

btnAdicionar.addEventListener('click', function(e) {
    formMenu.style.display = 'block'
})


telefoneContato.addEventListener('keyup', function(e) {
    let num = telefoneContato.value.replace(/\D/g,''); 
    telefoneContato.value = ('(' + num.substring(0,2) + ') ' + num.substring(2,7) + '-' + num.substring(7,11)); 
}
)




