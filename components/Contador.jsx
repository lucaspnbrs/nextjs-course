import { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0
    }

    inc(){
        this.setState({
            numero: this.state.numero + 1
        })
    }
    render (){
        return (
            <div>
                <h1>Teste de Classe</h1>
            </div>
        )
    }
}