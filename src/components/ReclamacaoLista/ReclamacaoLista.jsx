import React, { Component } from 'react';
import ReclamacaoItem from '../ReclamacaoItem';

class ReclamacaoLista extends Component {

    render() {
        console.log(this.props.situation);
        return this.props.situation.reclamacoes === 'CARREGANDO' ?
        'Carregando...' :
        (
            <reclamacao-lista>
                <ul>
                    {this.props.situation.reclamacoes.map((reclamacao, index) => {
                        return (
                            <li key={index}>
                                <ReclamacaoItem foto={reclamacao.foto} titulo={reclamacao.titulo} descricao={reclamacao.descricao} />
                            </li>
                        );
                    })}
                </ul>
            </reclamacao-lista>
        )
    }
}
export default ReclamacaoLista;