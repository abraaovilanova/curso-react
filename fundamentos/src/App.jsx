import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Pai from './components/basicos/Pai'
import Filho from './components/basicos/Filho'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Megasena from './components/megasena/Megasena'


import './App.css'

export default props => {
    return (
        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#14 - Mega Sena">
                <Megasena qtde={8} />
            </Card>

            <Card titulo="#13 - Contador - Componente baseado em classe">
                <Contador numeroInicial={100}></Contador>
            </Card>

            <Card titulo="#12 - Componente Controlado">
                <Input></Input>
            </Card>
            
            <Card titulo="#11 - Comunicação Direta">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#10 - Comunicação Direta">
                <DiretaPai></DiretaPai>
            </Card>


            <Card titulo="#09 - ComponenteRenderização Condicional">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Abraão'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'abe.alves2@gmail.com'}}></UsuarioInfo>
            </Card>

            <Card titulo="#08 - Lista de Produtos com Tabela">
                <ListaProdutos></ListaProdutos>
                
            </Card>


            <Card titulo="#07 - Lista de Alunos">
                <ListaAlunos></ListaAlunos> 
            </Card>
               

            <Card titulo="#06 - Componente com Pai e filhos">
                <Pai sobrenome="Alves Vila Nova">
                    <Filho nome="João"  />
                    <Filho nome="Abraão" />
                    <Filho nome="Camila" />
                </Pai>
            </Card>

            <Card titulo="#05 - Componente com filhos">
                <Familia sobrenome="Araújo" />
            </Card>

            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio max={60} min={1} />
            </Card>
            
            <Card titulo="#03 - Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Com Parâmetro">
                <ComParametro 
                    titulo="Situação do Aluno!"
                    aluno="Abraão Alves Vila Nova"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
        
        </div>

    </div>
        
    )
}