//CRIAR UM ELEMENTO COM JS PURO
//IMPERATIVO

/*const h1 = document.createElement("h1")
h1.textContent = "Olá mundo JS!"
h1.className = "header"
document.getElementById("root").append(h1)*/


//DECLARATIVO
const nome = "Oznir Deodato"
const usuario = {
    nome: "Oznir",
    sobrenome: "Deodato"
}
const elemento = <h1 className="header">Olá {usuario.nome}!</h1>
//console.log(elemento)

ReactDOM.render(
    elemento,
    document.getElementById("root")
)