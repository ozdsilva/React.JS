/*const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  
  setInterval(tick, 1000);*/

//CRIAR UM ELEMENTO COM JS PURO
//IMPERATIVO

/*const h1 = document.createElement("h1")
h1.textContent = "Olá mundo JS!"
h1.className = "header"
document.getElementById("root").append(h1)*/


//DECLARATIVO

/*function nomeCompleto(user){
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


//console.log(elemento)*/

function BemVindo(props){
    if(props.nome){
        return <h1>Olá {props.nome}!</h1>
    } else {
        return <h1>Olá Mundo!</h1>
    }
}

function Conteudo(props){
    return (
        <div>
            <h2>Isso é um outro componente.</h2>
            <p>Qualquer texto!</p>
        </div>
    )
}

function App(){
    return (
        <main>
            <div class="container py-4">
                <Header/>
                <Destaque texto="Isso é um texto!"/>
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <Card tema="dark"/>
                    </div>
                    <div class="col-md-6">
                        <Card tema="light"/>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)