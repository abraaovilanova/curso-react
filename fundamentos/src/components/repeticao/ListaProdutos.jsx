import React from 'react'
import produtos from '../../data/produtos'
import './ListaProdutos.css'

export default props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
           {produtos.map(produto => {
               return (
                <tr key={produto.id} className={produto.id % 2 == 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
               )
           })}
        </table>
    )
}