//CRIAR UM ELEMENTO COM JS PURO
//IMPERATIVO

/*const h1 = document.createElement("h1")
h1.textContent = "Olá mundo JS!"
h1.className = "header"
document.getElementById("root").append(h1)*/


//DECLARATIVO

function nomeCompleto(user){
    return user.nome + ' ' + user.sobrenome
}

const nome = "Oznir Deodato"
const usuario = {
    nome: "Oznir",
    sobrenome: "Deodato"
}
const pagina = (
    <div>
        <h1 className="header">Olá {nomeCompleto(usuario)}!</h1>
        <p>Isso é um parágrafo.</p>
    </div>
)
//console.log(elemento)

ReactDOM.render(
    pagina,
    document.getElementById("root")
)