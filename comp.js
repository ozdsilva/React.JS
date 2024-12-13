function Header(props){
    return(
        <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
              <span class="fs-4">Curso React</span>
            </a>
        </header>
    )
}

//COMPONENTE FUNCIONAL

/*function Destaque(props){
    return(
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Curso React JS</h1>
                <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button class="btn btn-primary btn-lg" type="button">Saiba mais</button>
            </div>
         </div>
    )
}*/

//COMPONENTE DE CLASSE

/* class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    add = ()=>{
        this.setState(function(prevState){
            return {count: prevState.count + 1}
        })
    }

    sub = ()=>{
        this.setState(function(prevState){
            return {count: prevState.count - 1}
        })
    }

    render(){
        return(
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Contador: {this.state.count}</h1>
                    <p class="col-md-8 fs-4">Aprendendo sobre State (Estado)</p>
                    <div class="row gap-2">
                        <button onClick={this.sub} class="col btn btn-danger btn-lg" type="button">Subtrair</button>
                        <button onClick={this.add} class="col btn btn-success btn-lg" type="button">Adicionar</button>
                    </div>
                </div>
             </div>
        )
    }
} */

    //COMPONENTE FUNCIONAL

    function Contador(props){

//CRIAR UM STATE
        const [count, setCount] = React.useState(0)

        function add(){
            setCount(count + 1)
        }

        function sub(){
            setCount(count - 1)
        }

        return (
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Contador: {count}</h1>
                    <p class="col-md-8 fs-4">Aprendendo sobre State (Estado)</p>
                    <div class="row gap-2">
                        <button onClick={sub} class="col btn btn-danger btn-lg" type="button">Subtrair</button>
                        <button onClick={add} class="col btn btn-success btn-lg" type="button">Adicionar</button>
                    </div>
                </div>
            </div>
        )
    }

function Card(props){
    if(props.tema == "dark") {
        return (
            <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>Alterando o card com a classe de fundo</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-light" type="button">Clique aqui</button>
            </div>
        )
    }
    return (
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Card com bordas</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button class="btn btn-outline-secondary" type="button">Clique aqui</button>
        </div>
    )
}

function Footer(props){
    return (
        <footer class="pt-3 mt-4 text-body-secondary border-top">
            &copy; 2024
        </footer>
    )
}