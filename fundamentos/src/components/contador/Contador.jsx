import React, { Component } from 'react'
import './Contador.css'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.paassoInicial || 5,

    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>

                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>

 
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar}></Botoes>

            </div>
        )
    }
}