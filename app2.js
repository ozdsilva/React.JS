const App = () => {

const usuarios = [
    {
        id: 1,
        nome: "Oznir",
        idade:30
    },
    {
        id: 2,
        nome: "Dimitri",
        idade:20
    },
    {
        id: 3,
        nome: "Luiz",
        idade: 25
    }
]

const itemList = usuarios.map((usuario=>
    <li key={usuario.id.toString()} > {usuario.nome}</li>))

return (
    <div>
      <h1>Usuários</h1>
      <ul>{itemList}</ul>
    </div>
)

//console.log(arr, arrDobro)

/*ReactDOM.render(
    <ul>{itemList}</ul>,
    document.getElementById('root')
)*/
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);